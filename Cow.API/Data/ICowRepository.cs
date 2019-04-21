using System.Collections.Generic;
using System.Threading.Tasks;
using Cow.API.Models;

namespace Cow.API.Data
{
    public interface ICowRepository
    {
        void Add<T>(T entity) where T : class;
        void Delete<T>(T entity) where T : class;
        Task<bool> SaveAll();
        Task<List<Users>> GetUsers();
        Task<Users> GetUser(int id);
        Task<List<Addresses>> GetAddresses();
    }
}