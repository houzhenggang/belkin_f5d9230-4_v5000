/* -- updatedd: get_connection.c --
 *
 * Copyright (c) 2002 Philipp Benner <philipp@philippb.tk>
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 *
 * The GNU C Library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with the GNU C Library; if not, write to the Free
 * Software Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA
 * 02111-1307 USA.
 */


#include <stdio.h>
#include <stdlib.h>
#include <sys/types.h>
#include <sys/socket.h>
#include <netinet/in.h>


#include <netdb.h>

extern int h_errno;

int
get_connection(char *hostname, int port) {

	struct	sockaddr_in addr;
	struct	hostent *host;
	int	s;

	if((host = MyGetHostByName(hostname)) == NULL)
	    return -1;

	
	addr.sin_family	= AF_INET;
	addr.sin_port	= htons(port);
	addr.sin_addr	= *(struct in_addr*)host->h_addr;

	if((s = socket(AF_INET, SOCK_STREAM, 0)) == -1)
	    return -2;
	
	if(connect(s, (struct sockaddr*)&addr, sizeof(addr)) == -1)
	{
			close(s);
	    return -3;
	}    
	return s;

}
