using EventWebAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace EventWebAPI.Controllers
{
    [RoutePrefix("api/events")]
    [Authorize]
    public class EventsController : ApiController
    {
        private EventDbContext db = new EventDbContext();


        [HttpGet]
        [Route("")] //GET api/events
        
        public HttpResponseMessage GetEvents()
        {
            var events = db.Events
                .OrderBy(e => e.Name)
                .ToList();
            return Request.CreateResponse(HttpStatusCode.OK, events);
        }

        [HttpGet]
        [Route("{id}")] // GET api/events/{id}
        public HttpResponseMessage GetEventById(int id)
        {
            var eventObj = db.Events.Find(id);
            return Request.CreateResponse(HttpStatusCode.OK, eventObj);
        }

        [HttpPost]
        [Route("")]
        public HttpResponseMessage AddEvent([FromBody]Event ev)
        {
            try
            {
                db.Events.Add(ev);
                db.SaveChanges();
                return Request.CreateResponse(HttpStatusCode.OK, ev);
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, "Unable to add data to table");
            }
        }
    }
}
