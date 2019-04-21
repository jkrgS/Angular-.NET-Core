using System.ComponentModel.DataAnnotations;

namespace Cow.API.Models
{
    public class Addresses
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public Users User { get; set; }
        [MaxLength(100)]
        public string Street { get; set; }
        public int StreetNumber { get; set; }
        [MaxLength(100)]
        public string PostCode { get; set; }
        [MaxLength(100)]
        public string City { get; set; }
        [MaxLength(100)]
        public string Country { get; set; }
        public string Longitude { get; set; }
        public string Latitude { get; set; }

    }
}