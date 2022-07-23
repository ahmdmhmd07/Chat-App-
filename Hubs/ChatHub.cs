﻿using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChatApp.Hubs
{
    public class ChatHub : Hub
    {
        public async Task SendMessage (string fromUser , string message)
        {
            await Clients.All.SendAsync("ReciveMessage", fromUser, message);
        }
    }
}
