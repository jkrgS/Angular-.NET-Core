using System.Threading.Tasks;
using AutoMapper;
using Cow.API.Data;
using Cow.API.Models;
using Microsoft.AspNetCore.Mvc;

namespace Cow.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly ICowRepository _repo;
        public UsersController(ICowRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]
        public async Task<IActionResult> GetUsers()
        {
            var users = await _repo.GetUsers();
            return Ok(users);
        }

        [HttpGet("{id}", Name = "GetUser")]
        public async Task<IActionResult> GetUser(int id)
        {
            var user = await _repo.GetUser(id);

            return Ok(user);
        }

        [HttpPost("addUser")]
        public async Task<IActionResult> AddUser([FromBody] Users User)
        {
            _repo.Add(User);
            if (await _repo.SaveAll())
            {
                return Ok();
            }
            return NoContent();
        }

        [HttpPost("deleteUser/{id}")]
        public async Task<IActionResult> DeleteUser(int id)
        {
            var user = await _repo.GetUser(id);

            _repo.Delete(user);

            if (await _repo.SaveAll())
            {
                return Ok();
            }
            return NoContent();
        }

    }
}