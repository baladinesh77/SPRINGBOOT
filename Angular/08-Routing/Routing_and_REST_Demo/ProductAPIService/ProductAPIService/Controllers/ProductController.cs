using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using ProductAPIService.Models;

namespace ProductAPIService.Controllers
{
    [RoutePrefix("api/products")]
    public class ProductController : ApiController
    {
        private static List<Product> products=new List<Product>()
        {
            new Product { Id = 101, Name = "Apple", Price = 150, Quantity = 10},
            new Product { Id = 102, Name = "Orange", Price = 80, Quantity = 20},
            new Product { Id =103, Name = "Mango", Price = 140, Quantity = 15},
             new Product { Id =104, Name = "Watermelon", Price = 30, Quantity = 15}
        };

        [Route("")]
        [HttpGet]
        public List<Product> GetProducts()
        {
            return products;
        }

        [Route("add")]
        [HttpPost]
        public Product AddProducts(Product product)
        {
            products.Add(product);
            return product;
        }

        [HttpGet]
        [Route("{id}")]
        public Product GetProduct(int id)
        {
            return products.SingleOrDefault(p => p.Id == id);
        }

    }
}
