using System.Collections.Generic;
using System.Threading.Tasks;
using Cow.API.Data;
using Cow.API.Models;
using Microsoft.EntityFrameworkCore;

namespace Cow.API.Data
{
    public class CowRepository : ICowRepository
    {
        private readonly DataContext _context;
        public CowRepository(DataContext context)
        {
            _context = context;
        }

        public async Task<Users> GetUser(int id)
        {
            var user = await _context.Users.Include(a => a.Addresses).FirstOrDefaultAsync(u => u.Id == id);

            return user;
        }
        public async Task<List<Users>> GetUsers()
        {
            return await _context.Users.Include(a => a.Addresses).ToListAsync();
        }
        public async Task<List<Addresses>> GetAddresses()
        {
            var addresses = await _context.Addresses.ToListAsync();
            return addresses;
        }

        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }
        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}