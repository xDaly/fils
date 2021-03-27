using Altenar.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Altenar.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TestController : ControllerBase
    {
        private readonly IHubContext<BetsHub> ihubContext;

        public TestController(IHubContext<BetsHub> ihubContext)
        {
            this.ihubContext = ihubContext;
        }
        [HttpGet("{data}")]
        public async Task<IActionResult> Test(string data)
        {
            await ihubContext.Clients.All.SendAsync("betupdate", data);
            return Ok();
        }
    }
    
}
