using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;

namespace Cow.API.Models
{
    public class Users
    {
        public int Id { get; set; }
        [MaxLength(250)]
        public string Name { get; set; }
        public ICollection<Addresses> Addresses { get; set; }

        public Users()
        {
            Addresses = new Collection<Addresses>();
        }

    }
}