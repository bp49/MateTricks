using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace MateTricks.DTOs
{
    public class RegisterUserDTO
    {
        [Display(Name = "User Name")]
        [Required(ErrorMessage = "{0} is required")]
        public string UserName { get; set; }

        [MinLength(6, ErrorMessage = "{0} must be at least {1} characters long")]
        public string Password { get; set; }

        [Required]
        public string Gender { get; set; }
        [Required]
        public string Name { get; set; }

        [Required(ErrorMessage = "please enter your birthdate")]
        public DateTime Birthdate { get; set; }

        [Required]
        public string City { get; set; }
    }
}
