using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web.Http;
using System.Web.Routing;
using Angular2WebAPI.Models;

namespace Angular2WebAPI.Controllers
{
    [RoutePrefix("api/users")]
    public class UserController : ApiController
    {
        private static List<User> users = new List<User>()
        {
            new User() {Id=1, FirstName = "James", LastName = "Williams"},
            new User() {Id=2, FirstName = "John", LastName = "Honai"}
        };

        [HttpGet]
        [Route("")]
        public IEnumerable<User> GetUsers()
        {
            return users;
        }

        [HttpPost]
        [Route("new")]
        public User Add(User user)
        {
            user.Id = users.Count + 1;
            users.Add(user);
            return user;
        }
    }
}
