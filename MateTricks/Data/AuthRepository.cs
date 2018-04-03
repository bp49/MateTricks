using System;
using System.Linq;
using System.Threading.Tasks;
using System.Security.Cryptography;
using MateTricks.Models;
using Microsoft.EntityFrameworkCore;

namespace MateTricks.Data
{
    public class AuthRepository : IAuthRepository
    {
        private readonly DataContext _context;

        public AuthRepository(DataContext context)
        {
            _context = context;
        }
        public async Task<User> Login(string userName, string password)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.UserName == userName);

            return (user == null || !PasswordHashVerified(password, user.PasswordHash, user.PasswordSalt)) ? null : user;
        }

        private bool PasswordHashVerified(string password, byte[] passwordHash, byte[] passwordSalt)
        {
            // Hash entered password
            var hash = new HMACSHA512();
            hash.Key = passwordSalt;
            var EnteredHash = hash.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            
            // Compare new hashed password to old hashed password
            // Temporary return value for testing
            return EnteredHash.SequenceEqual(passwordHash);
            //EnteredHash.sequenceequal(passwordHash)
        }

        public async Task<User> Register(string userName, string password)
        {
            // Hash the password using SHA512 with random key (salt)
            var hash = new HMACSHA512();
            var computedHash = hash.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));

            var newUser = new User { UserName = userName };
            newUser.PasswordHash = computedHash;
            newUser.PasswordSalt = hash.Key;

            await _context.Users.AddAsync(newUser);
            await _context.SaveChangesAsync();
            return newUser;
        }

        public bool ValidUserName(string UserName)
        {
            var Match = _context.Users.Where(u => u.UserName == UserName).SingleOrDefault();
            if(Match == null)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
    }
}

