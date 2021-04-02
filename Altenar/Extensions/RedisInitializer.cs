using Altenar.Config;
using Altenar.Models;
using Altenar.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.SignalR;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Newtonsoft.Json;
using StackExchange.Redis;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Altenar.Extensions
{
    public static class RedisInitializer
    {
        public static void InitializeRedis(this IServiceCollection services, IConfiguration configuration)
        {
            var redisConfig = new RedisConfig();
            configuration.Bind(nameof(RedisConfig), redisConfig);

            var redis = ConnectionMultiplexer.Connect(redisConfig.GetConnectionString());
            services.AddSingleton(s => redis.GetSubscriber());
            services.AddSingleton(s => redis.GetDatabase());
        }
        public  static void StartRedis(this IApplicationBuilder applicationBuilder)
        {
            var subscriber = (ISubscriber)applicationBuilder.ApplicationServices.GetService(typeof(ISubscriber));
            var signalService = (ISignalService)applicationBuilder.ApplicationServices.GetService(typeof(ISignalService));
             subscriber.Subscribe("9933", (channel, message) =>
            {
                var data = JsonConvert.DeserializeObject<SampleData>(message);
                signalService.SendMessage(data.datamesage);
            });

        }
    }
    public class SampleData
    {
        public string datamesage { get; set; }
    }
}
