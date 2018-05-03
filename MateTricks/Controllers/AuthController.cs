using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MateTricks.Data;
using MateTricks.DTOs;
using Microsoft.AspNetCore.Http;
using System.IdentityModel.Tokens.Jwt;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using System.Security.Claims;
using Microsoft.Extensions.Configuration;
using AutoMapper;
using MateTricks.Models;

namespace MateTricks.Controllers
{
    [Produces("application/json")]
    [Route("api/Auth")]
    public class AuthController : Controller
    {
        private readonly IAuthRepository _repo;
        private readonly IConfiguration _configuration;
        private readonly IMapper _mapper;
        public AuthController(IAuthRepository repo, IConfiguration configuration, IMapper mapper)
        {
            _repo = repo;
            _configuration = configuration;
            _mapper = mapper;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterUserDTO user)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            // Make user name lower case
            user.UserName = user.UserName.ToLower();

            if (!_repo.ValidUserName(user.UserName))
            {
                ModelState.AddModelError("UserName", "User name already exists");
                return BadRequest(ModelState);
            }


            var newUser = await _repo.Register(_mapper.Map<User>(user), user.Password);
            // Temporary return result for testing
            return Created("api/auth/register", _mapper.Map<UserDetailedDTO>(newUser));
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginDTO user)
        {
            var storedUser = await _repo.Login(user.UserName, user.Password);
            if (storedUser == null)
            {
                return Unauthorized();
            }

            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_configuration.GetSection("TokenSettings:JWTKey").Value);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[] {
                new Claim(ClaimTypes.NameIdentifier, storedUser.ID.ToString()),
                new Claim(ClaimTypes.Name, storedUser.UserName)
 }),
                Expires = DateTime.Now.AddDays(1),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key),
                SecurityAlgorithms.HmacSha512Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            var TokenString = tokenHandler.WriteToken(token);

            // Temporary return value for testing
            return Ok(new { TokenString = TokenString, ID = storedUser.ID, UserName = storedUser.UserName });
        }
    }
}
