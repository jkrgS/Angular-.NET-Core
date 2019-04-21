using Cow.API.Models;
using Microsoft.EntityFrameworkCore;

namespace Cow.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Users> Users { get; set; }
        public DbSet<Addresses> Addresses { get; set; }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Users>()
            .HasMany(a => a.Addresses)
            .WithOne(u => u.User)
            .OnDelete(DeleteBehavior.Cascade);
        }
    }
}