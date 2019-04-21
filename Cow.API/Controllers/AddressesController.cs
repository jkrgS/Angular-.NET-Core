using System.Threading.Tasks;
using Cow.API.Data;
using Cow.API.Models;
using Microsoft.AspNetCore.Mvc;

namespace Cow.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AddressesController : ControllerBase
    {
        private readonly ICowRepository _repo;
        public AddressesController(ICowRepository repo)
        {
            _repo = repo;
        }

        [HttpPost("addAddress")]
        public async Task<IActionResult> AddAddress([FromBody] Addresses Address)
        {
            _repo.Add(Address);
            if (await _repo.SaveAll())
            {
                return Ok();
            }
            return NoContent();
        }

    }
}