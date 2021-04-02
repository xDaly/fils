using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Altenar.Config
{
    public class RedisConfig
    {
        public string HostName { get; set; }
        public string Port { get; set; }
        public string Password { get; set; }
        public string GetConnectionString()
        {
            return HostName + ":" + Port + "," + Password + ",ssl = True,abortConnect = False";
        }

    }
}
