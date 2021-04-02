using Altenar.Models;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Altenar.Services
{
    public interface ISignalService
    {
        Task SendMessage(string message);
    }
    public class SignalService : ISignalService
    {
        private readonly IHubContext<BetsHub> ihubContext;

        public SignalService(IHubContext<BetsHub> ihubContext)
        {
            this.ihubContext = ihubContext;
        }
        public async Task SendMessage(string message)
        {
            await ihubContext.Clients.All.SendAsync("betupdate", message);

        }
    }
}
