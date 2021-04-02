using Altenar.Config;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
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
        public static void StartRedis(this IApplicationBuilder applicationBuilder)
        {
            var subscriber = (ISubscriber)applicationBuilder.ApplicationServices.GetService(typeof(ISubscriber));
        }
    }
}
