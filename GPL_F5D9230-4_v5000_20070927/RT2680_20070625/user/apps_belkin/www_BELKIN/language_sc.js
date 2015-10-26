function dw(message)
{
 if((message.indexOf("<script", 0) != -1) || (message.indexOf("</script", 0) != -1))
 {
  message = message.replace("<script", "&#60script");
  message = message.replace("</script", "&#60/script");  
 }
  
 document.write(message); 
}
function assign_var()
{
language='Simplified Chinese';
show1='首页'; // Home 
show2='帮助'; // Help 
show3='登录'; // Login 
show4='退出'; // Logout 
show5='因特网状态'; // Internet Status 
show6='连接中';  //Connected 
show7='无连接'; // No Connection 
show8='局域网安装'; // LAN Setup 
show9='局域网设置'; // LAN Settings 
show10='DHCP 客户列表'; // DHCP Client List 
show11='广域网络'; // Internet WAN 
show12='连接类型'; // Connection Type 
show13='DNS服务器'; //DNS 
show14='MAC地址'; // MAC Address 
show15='无线局域网不可用'; // WLAN Not Available 
show16='无线'; // Wireless 
show17='通信信道 和 SSID'; // Channel and SSID 
show18= '安全'; // Security 
show19=  '设定为AP（接入点）'; // Use as Access Point 
show20=  '选择IP地址'; // Specify IP Address 
show21=  'MAC地址控制'; // MAC Address Control 
show22=   '无线网桥'; // Wireless Bridge 
show23=   '防火墙'; // Firewall 
show24=   '虚拟服务器'; // Virtual Servers 
show25=   '用户端IP地址过滤器'; //Client IP Filters 
show26=   'MAC地址过滤'; // MAC Address Filtering 
show27=   '非军事区'; // DMZ 
show28=   'WAN Ping阻挡'; // WAN Ping Blocking 
show29=   '安全登录记录'; // Security Log 
show30=   '工具程序'; // Utilities 
show31=   '家长控制'; // Parental Control 
show32=   '重新启动路由器'; // Restart Router 
show33=   '重新启动AP接入点'; // Restart AP 
show34=  '恢复出厂设置'; //Restore Factory Default 
show35=  '保存/备份 设置'; // Save/Backup Settings 
show36=  '恢复之前的设置'; // Restore Previous Settings 
show37=  'Firmware更新'; // Firmware Update 
show38=  '系统设定'; // System Settings 
show39='打印机服务'; // Printer Service 
show40='打印服务器配置'; // Print Server Configuration 
show41=   'DDNS '; // DDNS 
show42='Static';
show43='PPPoE';
show44='Dynamic';
show45='PPTP';
show46='Telstra BigPond';
sm1='更多信息'; //More Info 
btn1='清除变更'; //Clear Changes
btn2='套用变更'; //Apply Changes
btn3='更新动态DNS服务器'; //Update Dynamic DNS
Router='路由器'; //Router
AP='AP接入点'; //AP
Dynamic='动态'; //Dynamic
cff1='Firmware 检查完成'; //Check Firmware Successfully
cff2='Firmware信息';  // Firmware Info.
cff3='无法为此路由器更新Firmware'; // There is no new firmware update available for this Router!
cff4='无法与Firmware信息服务器连接，<br>请检查无线网络连接'; // Cannot connect to the firmware information server, <br>please double check the wan connection.
cff5='An updated version of firmware is available for your Router';
d1='Belkin | 复制管理员'; //Belkin | Duplicate Administrator
d2=' '; //Duplicate Administrator
d3='其他管理员正在操作此设备,您不能登录'; // This device is managed by 
d4=' '; //currently!!
fc1='防火墙 > 用户IP过滤'; // Firewall > Client IP filters 
fc2a='此路由器可被设定为只存取网络、电子邮件或其它网络服务'; fc2b='在特定日期与时间'; // The Router can be configured to restrict access to the Internet, e-mail or other network services at specific days and times.
IP='IP';
Port='端口'; //Port 
Type='类型'; //Type 
BT='阻挡时间'; // Block Time 
Day='日期'; //Day
Tm='时间'; //Time
Enable='开启'; //Enable
BOTH='两者均用'; // BOTH 
Always='总是'; // Always 
Block='阻挡'; // Block 
SUN='>星期天'; //>SUN 
MON='>星期一'; //>MON 
TUE='>星期二'; //>TUE 
WED='>星期三'; //>WED 
THU='>星期四'; //>THU 
FRI='>星期五'; //>FRI 
SAT='>星期六'; //>SAT 
PM=':00 P.M.'; 
AM=':00 A.M.';
fcipm='您可能尚未输入IP地址或您所输入的部份IP地址是不正确的。IP地址可以是界于0至254之间的任一数字'; // Either you have not entered the client IP address or some of the numbers in the IP address you entered are invalid.  The number in IP entry box should be between 1 and 254.
fcsm='您所输入的端口号码是不正确的'; // The port numbers you entered are invalid.
fcrm='端口范围应该是后大于前'; // The latter of the port range must be larger than the former.
fcripm='IP范围应该是后大于前'; // The latter of the ip range must be larger than the former.
fcpm='在此端口输入栏中的数字应界于1到65535'; // The number in port entry box should be between 1 - 65535.
fd1='防火墙 > 非军事区'; // Firewall > DMZ 
fd2='非军事区功能能让您指定特定任一在您区域中的电脑被NAT防火墙隔离。如果NAT发生问题，这项功能是必需的，由其当您使用电脑游戏或是视讯会议时。若临时状况发生请使用此项功能。'; // The DMZ feature allows you to specify one computer on your network to be placed outside of the NAT firewall. This may be necessary if the NAT feature is causing problems with an application such as a game or video conferencing application. Use this feature on a temporary basis.
fd3='在此非军事区的电脑并未受到黑客侵略的保护'; // The computer in the DMZ is not protected from hacker attacks.
fd4='请输入IP地址的最后一位数字并选取『启用』。点选“套用变更”使更改生效。'; // To put a computer in the DMZ, enter the last digits of its IP address in the field below and select "Enable". Click "Submit" for the change to take effect.
fd5='虚拟非军事区主机IP地址'; // IP Address of Virtual DMZ Host 
fd6='静态IP'; // Static IP  
fd7='专用 IP';// Private IP  
fd8='启用'; // Enable 
fd9='防火墙 > DDNS '; // Firewall > DDNS 
fd10='动态DNS服务为您的因特网用户提供一个固定的DNS服务器名(取代以前提供IP地址而可能经常需要变换). 这样您的路由器和在路由器的虚拟服务器上运行的应用可以在因特网的不同地方进行连接和使用而无需知道您当前的IP地址. 您的无线路由器通过DynDNS.org支持动态DNS服务. '; //Dynamic DNS allows you to provide Internet users with a fixed domain name (instead of an IP address which may periodically change), allowing your router and applications set up in your router/'s virtual servers to be accessed from various locations on the Internet without knowing your current IP address. Your Wireless Router supports dynamic DNS through DynDNS.org
fd11='在使用该服务之前您必须生成一个用户帐号&nbsp;'; // You must create an account before using this service.
fd12='用户名称 > '; // User Name 
fd13='密码 > '; // Password 
fd14='域名> '; // Domain Name 
fd15='请在启用非军事区前输入IP地址'; 
fd16='Auto-update'; 
fmc1='防火墙 > MAC地址过滤'; // Firewall > MAC address filtering 
fmc2='此功能可让您设置允许访问的客户机列表。当您启用此功能时，您必须输入网络中每台客户机的 MAC 地址，从而使每台客户机都可访问网络。'; // This feature lets you set up a list of allowed clients. When you enable this feature, you must enter the MAC address of each client on your network to allow network access to each.  
fmc3='启用MAC地址过滤'; // Enable MAC Address Filtering 
fmc4='MAC地址过滤清单'; // MAC Address Filtering List 
fmc5='阻挡'; // Block 
fmc6='主机'; // Host 
fmc7='MAC地址'; // MAC Address 
fmc9='无法输入多重播送媒体MAC地址';
fmc12='这个MAC地址已经加入';
Add='加入'; //Add 
Del='删除'; //Delete
fmcipm='您可能未输入全部的十六进制数字或是部份您所输入的十六进制数字是不正确的。一个十六进制数字应为0至9或是A至F的字母'; // Either you have not entered all of the hex digits or some of the hex digits you entered are invalid. A hex digit can be a number from 0-9 or a letter from A-F.
fmn1='防火墙 >'; // Firewall >
fmn2='您的路由器有一个防火墙可以保护您的网络被一般黑客入侵，包括Ping of Death(PoD)和Denial of Service (DoS)。如果需要您可以将防火墙关闭。虽然将防火墙关闭不会让您完全无法阻挡黑客的攻击，但还是建议您尽量都开启防火墙。'; // Your Router is equipped with a firewall that will protect your network from a wide array of common hacker attacks including Ping of Death (PoD) and Denial of Service (DoS) attacks. You can turn the firewall function off if needed. Turning off the firewall protection will not leave your network completely vulnerable to hacker attacks, but it is recommended that you turn the firewall on whenever possible.
fmn3='防火墙启用/禁用'; // Firewall Enable / Disable >
Disable='关闭'; // Disable 
fp1='防火墙 > 阻挡WAN Ping'; // Firewall > WAN Ping Blocking 
fp2='<b>进阶设定功能!</b> 您可以设定路由器不回应ICMP Ping(ping to the WAN端口)。这可以提高安全度'; //<b>ADVANCED FEATURE!</b> You can configure the Router not to respond to an ICMP Ping (ping to the WAN port). This offers a heightened level of security.
fp3='阻挡ICMP Ping';  // Block ICMP Ping >
fs1='防火墙 > 安全记录'; //Firewall > Security log
fs2='此路由器保存所有登入与注销之记录，以及所有网络上的攻击，记录可在下方查阅'; // The router keeps a log of all activity within the router such as computers logging in and out and any attempts from the Internet to access the router. The log is viewable below.
fs3='记录档案'; // Log File 
Save='存档'; // Save 
Clear='清除'; //Clear
Refresh='重新整理';  //Refresh
fv1='防火墙>虚拟服务器'; // Firewall > Virtual servers 
fvipm='您可能尚未输入所有IP地址，\n或是部份您所输入的数字是不正确的。\nIP地址的数字应界于0至255之间。'; // Either you have not entered all of the ip addresses \n or some of the numbers you entered are invalid. \n The number in ip address entry box should be between 1 - 254.
fvrm='此公用端口号码不可能是88，因为与无线路由器网络服务相冲突。'; // The public port number can not be 88.Because it will have a collision with the Wireless Router  web service.
fvipr='内传端口范围不正确'; // The Inbound port range is not correct.
fvppr='私人端口范围不正确'; // The Private port range is not correct.
fv2='这项功能能够让您追踪外部(因特网)的服务连接，例如网络服务器(端口80)，FTP服务器(端口21)或其它应用程序藉由路由器到达您内部网络的其它程序'; // This function will allow you to route external (Internet) calls for services such as a web server (port 80), FTP server (Port 21), or other applications through your Router to your internal network.
fv3='Active Worlds'; 
fv4='Age of Empires'; 
fv5='Age of Empires Expansion: The Rise of Rome'; 
fv6='Age of Empires II Expansion: The Conquerors'; 
fv7='Age of Empires II: The Age of Kings'; 
fv8='Age of Kings'; 
fv9='Age of Wonders'; 
fv10='Aliens vs. Predator'; 
fv11='Anarchy Online (BETA)'; 
fv12='AOL Instant Messenger'; 
fv13='Audiogalaxy Satellite'; 
fv14='Baldur\'s Gate'; 
fv15='BattleCom'; 
fv16='Battlefield Communicator'; 
fv17='Black and White'; 
fv18='Blizzard Battle.net'; 
fv19='Buddy Phone'; 
fv20='Bungie.net'; 
fv21='Camerades'; 
fv22='CART Precision Racing ';
fv23='Close Combat for Windows ';
fv24='Close Combat III: The Russian Front'; 
fv25='Close Combat: A Bridge Too Far'; 
fv26='Combat Flight Simulator 2: WWII Pacific Theater';
fv27='Combat Flight Simulator: WWII Europe Series'; 
fv28='Crimson Skies'; 
fv29='Dark Reign'; 
fv30='Dark Reign 2'; 
fv31='Delta Force 2'; 
fv32='Delta Three PC to Phone'; 
fv33='Descent 3'; 
fv34='Descent Freespace'; 
fv35='Diablo (1.07+)'; 
fv36='Diablo I';
fv37='Diablo II'; 
fv38='DialPad.Com';
fv39='DirectX 7 游戏'; //DirectX 7 Games
fv40='DirectX 8 游戏'; //DirectX 8 Games
fv41='DNS服务器'; // Domain Name Server (DNS)
fv42='Doom'; 
fv43='Dune 2000'; 
fv44='Dwyco Video Conferencing'; 
fv45='Elite Force'; 
fv46='Everquest'; 
fv47='F-16 ';
fv48='F-22 Lightning 3'; 
fv49='F-22 Raptor ';
fv50='F22 Raptor (Novalogic)'; 
fv51='Falcon 4.0'; 
fv52='Fighter Ace II'; 
fv53='Flight Simulator 2000'; 
fv54='Flight Simulator 98'; 
fv55='Freetel'; 
fv56='FTP服务器'; //FTP Server
fv57='GNUtella'; 
fv58='Golf 1998 Edition'; 
fv59='Golf 1999 Edition'; 
fv60='Golf 2001 Edition'; 
fv61='Go2Call'; 
fv62='Half Life'; 
fv63='Half Life Server'; 
fv64='Heretic II Server'; 
fv65='I76'; 
fv66='Ivisit'; 
fv67='IRC'; 
fv68='IStreamVideo2HPz'; 
fv69='KaZaA'; 
fv70='Kohan Immortal Sovereigns'; 
fv71='LapLink Gold'; 
fv72='Links 2001'; 
fv73='Lotus Notes服务器'; //Lotus Notes Server
fv74='Mail (POP3)'; 
fv75='Mail (SMTP)'; 
fv76='MechCommander 2.0'; 
fv77='MechWarrior 3'; 
fv78='MechWarrior 4'; 
fv79='Media Player 7'; 
fv80='Midtown Madness'; 
fv81='Midtown Madness 2'; 
fv82='Mig 29'; 
fv83='Monster Truck Madness'; 
fv84='Monster Truck Madness 2'; 
fv85='Motocross Madness'; 
fv86='Motocross Madness 2'; 
fv87='Motorhead Server'; 
fv88='MSN Gaming Zone'; 
fv89='MSN Messenger'; 
fv90='Myth'; 
fv91='Myth II Server'; 
fv92='Myth: The Fallen Lords'; 
fv93='Need for Speed'; 
fv94='NetMech'; 
fv95='Network Time Protocol (NTP)'; 
fv96='News Server (NNTP)'; 
fv97='OKWeb'; 
fv98='OKWin'; 
fv99='Outlaws'; 
fv100='pcAnywhere v7.5'; 
fv101='PhoneFree'; 
fv102='Polycom ViaVideo H.323'; 
fv103='Polycom ViaVideo H.324'; 
fv104='Quake'; 
fv105='Quake II (Client and Server)'; 
fv106='Quake III';
fv107='Red Alert'; 
fv108='Rise of Rome'; 
fv109='Roger Wilco'; 
fv110='Rogue Spear'; 
fv111='Secure Shell Server (SSH)'; 
fv112='Secure Web Server (HTTPS)'; 
fv113='ShoutCast'; 
fv114='SNMP ';
fv115='SNMP Trap'; 
fv116='Speak Freely'; 
fv117='StarCraft'; 
fv118='Starfleet Command'; 
fv119='StarLancer'; 
fv120='SWAT3';
fv121='Telnet服务器'; //Telnet Server
fv122='The 4th Coming'; 
fv123='Tiberian Sun: C&C ';
fv124='Tiberian Sun: C&C III"'; 
fv125='Total Annihilation'; 
fv126='Ultima'; 
fv127='Unreal Tournament'; 
fv128='Urban Assault'; 
fv129='VoxPhone 3.0 ';
fv130='Warbirds 2'; 
fv131='WEB服务器(HTTP) '; // Web Server (HTTP)
fv132='WebPhone 3.0'; 
fv133='Windows 2000 Terminal Server'; 
fv134='X Windows'; 
fv135='Yahoo Pager'; 
fv136='Yahoo Messenger Chat'; 
fv137='Pal Talk'; 
fv138='Real Player 8 Plus'; 
fv139='RealAudio';
fv140='Netmeeting 2.0, 3.0, Intel Video Phone'; 
fv141='Westwood Online ';
fv142='CuSeeMe ';
fv143='ICUII Client';       
fv200='清除记录'; // Clear entry 
Description='说明';  //Description
Inb='内传端口';  //Inbound port 
Type='类型'; //Type
Pipa='私人IP地址';  // Private IP address 
Pport='私人端口'; // Private port 
htop='回到最前面'; // top 
h1='帮助'; //Help
h2='名词解释';  //GLOSSARY OF TERMS
h3='<b>管理员</b> 管理员可提供网络维护服务。对此路由器而言，管理者可更改路由器设定'; //<b>Administrator</b> An administrator performs the service of maintaining a network. In the case of this Router, the person who sets up the Router and makes changes to the settings.
h4='<b>用户</b> 指在此网络上的电脑，其可使用路由器所提供的功能，例如自动DHCP服务器及防火墙'; //<b>Client</b> A computer on the network that uses the services of the Router, such as the automatic DHCP server and Firewall.
h5='<b>DHCP</b> 动态主机配置协议. 此通讯协议可自动将网络中每一台电脑的TCP/IP地址进行配置';  //<b>DHCP</b> Dynamic Host Configuration Protocol. This protocol automatically configures the TCP/IP settings of every computer on your home network.
h6='<b>拨号连接</b>  使用公用电话进行网络连接'; //<b>Dial-Up</b> A connection which uses the public telephone network.
h7='<b>非军事区</b> 路由器中的虚拟区域并不受到路由器防火墙的保护。在同一时间内，只有一台电脑可以放在非军事区中'; //<b>DMZ</b> A virtual zone in the router that is not protected by the Router\'s firewall.  One computer can be placed in the DMZ.
h8='<b>DNS服务器地址</b>  DNS指网域名称系统服务器，可使网络电脑主机享有一个网域名称(例如:belkin.com)以及一个或更多IP地址(例如:192.34.45.8)。一个DNS服务器可保有主机电脑的资料库, 网域名称及IP地址，故当您需要一个网域名称时，使用者可以得到一个正确的IP地址。家用网络电脑所使用的DNS服务器地址位于您ISP服务供应商所指定的DNS服务器';  //<b>DNS Server Address</b> DNS stands for Domain Name System, which allows Internet host computers to have a domain name (such as belkin.com) and one or more IP addresses (such as 192.34.45.8). A DNS server keeps a database of host computers and their respective domain names and IP addresses, so that when a domain name is requested (as in typing "belkin.com" into your Internet browser), the user is sent to the proper IP address. The DNS server address used by the computers on your home network is the location of the DNS server your ISP has assigned.
h9='<b>DSL调制解调器</b>  DSL指数字用户专线，一个DSL调制解调器是用您现有的电话线以高速来传送资料'; //<b>DSL Modem</b> DSL stands for Digital Subscriber Line. A DSL modem uses your existing phone lines to transmit data at high speeds.
h10='<b>动态IP</b>  即指一个自动由DHCP服务器上获得的IP地址'; //<b>Dynamic IP</b> An IP address that is automatically obtained from a DHCP server.
h11='<b>以太网络</b> 这是电脑网络标准。 以太网络是透过讯号线和网络集线器进行连接，传送资料的速度可高达每秒1000Mbits'; //<b>Ethernet</b> A standard for computer networks. Ethernet networks are connected by special cables and hubs, and move data around at up to 10 million bits per second (Mbps).
h12='<b>防火墙</b> 防火墙意指一道电子墙，可以阻挡未经授权的使用者存取特定档案或在网络中的电脑'; //<b>Firewall</b> An electronic boundary that prevents unauthorized users from accessing certain files or computers on a network.
h13='<b>Firmware</b> 意指安装在记忆体中的软体。必要的程序将会持续运行尽管系统已经关闭。软体比硬体容易更改但比储存在磁盘上的软件来得稳定'; //<b>Firmware</b> Software stored in memory. Essential programs that remain even when the system is turned off. Firmware is easier to change than hardware but more permanent than software stored on a disk.
h14='<b>IP地址</b> 意指网际网络协议  一个IP地址是由四组以句点分开的数字所组成，可用来标识一个网际网络的电脑主机，例如:192.34.45.8'; //<b>IP Address</b> IP stands for Internet Protocol. An IP address consists of a series of four numbers separated by periods, that identifies an single, unique Internet computer host. Example: 192.34.45.8.
h15='<b>ISDN</>  集成服务数字网络。ISDN可以同时传送声音、影像等资讯，速度高达128Kps，比一般高速模拟调制解调器更快更稳定。许多电信公司都提供ISDN服务支持'; //<b>ISDN</b> Integrated Services Digital Network. Digital telecommunications lines that can transmit both voice and digital network services up to 128K, and are much faster and more reliable than high-speed analog modems. ISDN lines are offered by many telephone companies.
h16='<b>ISP</b>网际网络服务提供商ISP就是可以让个人、企业或组织连接到网际网络的公司'; //<b>ISP</b> Internet Service Provider. An ISP is a business that provides connectivity to the Internet for individuals and other businesses or organizations. 
h17='<b>ISP网关地址</b> (参照ISP说明) ISP网关地址是给路由器的IP地址，只有在使用CABLE或DSL调制解调器时，才需要使用这个地址'; //<b>ISP Gateway Address</b> (see ISP for definition). The ISP Gateway Address is an IP address for the Internet router located at the IS\'s office. This address is required only when using a cable or DSL modem. 
h18='<b>局域网LAN</b>就是一群在相对而言较小的区域内(例如:家里或办公室内)相互连接在一起的电脑和装置。您家中的网络就是一个LAN'; //<b>LAN</b> Local Area Network. A LAN is a group of computers and devices connected together in a relatively small area (such as a house or an office). Your home network is considered a LAN.
h19='<b>MAC地址</b> MAC意指媒体存取控制。媒体存取控制地址就是连接到网络之装置的硬体地址'; //<b>MAC Address</b> MAC stands for Media Access Control. A MAC address is the hardware address of a device connected to a network.
h20='<b>MTU</b>指最大传输单元  即每次传输资料的最大值'; //<b>MTU</b> Maximum Transmission Unit. The largest unit of data that can be transmitted on any particular physical medium.
h21='<b>网络地址转换</b>  此流程可让您家中的所有电脑共享一个IP地址，这样您就可以透过家中网络的任何一部电脑存取网际网络上的资料，而无需向ISP购买其它的IP地址'; //<b>NAT</b> Network Address Translation. This process allows all of the computers on your home network to use one IP address. Using the NAT capability of the HomeConnect home network gateway, you can access the Internet from any computer on your home network without having to purchase more IP addresses from your ISP.
h22='<b>连接端口</b> 一个特定的频道是介由特定的连接端口号码所定义。'; //<b>Port</b> A logical channel that is identified by its unique port number. Applications listen on specific ports for information that may be related to it.
h23='<b>以太网络使用的点对点协议</b>  点对点协议是一种安全的资料传输方法，最早是用于电话拨号连接。PPPoE是用于以太网络'; //<b>PPPoE</b> Point-to-Point Protocol over Ethernet. Point-to-Point Protocol is a method of secure data transmission originally created for dial-up connections; PPPoE is for Ethernet connections.
h24='<b>PPTP点对点通讯协议</b>  它是PPP(点对点通讯协议)的一种，可以将一个通讯协议压缩的许多档案让另一个通讯协议使用。这种通讯科技可让TCP/IP资料在非TCP/IP网络上传输。PPTP可让您利用网络当成媒介去加入不同的网络'; //<b>PPTP</b> Point-to-Point Tunneling Protocol. A version of PPP (Point-to-Point Protocol) that has the ability to encapsulate packets of data formatted for one network protocol in packets used by another protocol. This tunneling technique allows TCP/IP data to be transmitted over a non-TCP/IP network. PPTP can be used to join different physical networks using the Internet as an intermediary.
h25='<b>SNTP简易网络时间通讯协议<b>  可以让您的路由器与系统的时间显示一致'; //<b>SNTP</b> Simple Network Time Protocol. A communication standard that allows for the transmission of real time information over a network or the Internet.
h26='<b>动态包状态侦测</b>  SPI是一种由您家用的网关提供的企业用户级网络安全保护。使用SPI，网关即可像防火墙一样保护您的网络不受黑客侵袭'; //<b>SPI</b> Stateful Packet Inspection. SPI is the type of corporate-grade Internet security provided by your HomeConnect home network gateway. Using SPI, the gateway acts as a "firewall," protecting your network from computer hackers.
h27='<b>静态IP</b> 意指由手动配置且不会改变的IP'; //<b>Static IP</b> An IP address that is manually configured and never changes.
h28='<b>子网掩码</b> 子网掩码可为您的ISP所提供的信息，是由四组很类似IP地址的数字所组成。用来建立使用在特定网络的IP地址(相反与可被网络辨识的IP地址，其必需被电脑网卡指定。'; //<b>Subnet Mask</b> A subnet mask, which may be a part of the TCP/IP information provided by your ISP, is a set of four numbers configured like an IP address. It is used to create IP address numbers used only within a particular network (as opposed to valid IP address numbers recognized by the Internet, which must assigned by InterNIC). 
h29='<b>传输控制协议</b> TCP是最常被使用的协议 TCP是高连线性与不中断性，故其可以提供稳定的传输性能'; //<b>TCP</b> Transmission Control Protocol. The most common Internet transport layer protocol. TCP is connection-oriented and stream-oriented, and provides for reliable communication over packet-switched networks.
h30='<b>TCP/IP</> 是透过网络进行资料信息传输的标准协议'; //<b>TCP/IP</b> Transmission Control Protocol over Internet Protocol. This is the standard protocol for data transmission over the Internet.
h31='<b>UDP</b>网络终端机协议：从一台电脑传送一个终端机讯息到另外一台正在运作应用程序的计算机。不像是TCP，UDP是透过无线传输模式而能保证绝对稳定的传输，这个应用程序本身必须侦测所有错误并检查可靠的传送'; //<b>UDP</b> User Datagram Protocol. Communications protocol for the Internet network layer, transport layer, and session layer, which makes it possible to send a datagram message from one computer to an application running in another computer. Unlike TCP, UDP is connectionless and does not guarantee reliable communication; the application itself must process any errors and check for reliable delivery. 
h32='<b>广域网</b>  一系列彼此相连的LAN，连接许多位于不同地点(例如:不同建筑物、城市、国家)因特网就是一个广域网络'; //<b>WAN</b> Wide Area Network. A network that connects computers located in geographically separate areas, (i.e., different buildings, cities, countries). The Internet is a wide area network.
h33='<b>WAN IP地址</b> 此IP地址由ISP的路由器指定'; //<b>WAN IP Address</b> The IP address assigned to the router by the ISP.
h34='<b>无线局域网</b>  一个透过无线的方式连接许多电脑的局域网'; // <b>WLAN</b> Wireless Local Area Network. A local area network that connects computers close together via radio (such as 802.11b)
Enabled='启用'; //Enabled
Disabled='关闭'; // Disabled 
i1='设定首页'; // Setup Home 
i2='状态'; // Status 
i3='版本信息'; //Version Info
i4='Firmware版本'; // Firmware Version 
i5='启动版本'; // Boot Version 
i6='硬体'; // Hardware 
i7='序号'; // Serial No.
i8='局域网设置'; // LAN Settings 
i9='局域网/无线局域网 MAC地址'; // LAN/WLAN MAC 
i9a='局域网 MAC地址'; // LAN MAC 
i9b='WLAN无法连接'; // WLAN Not Available 
i10='IP地址'; // IP address 
i11='子网掩码'; // Subnet mask 
i12='DHCP服务器'; // DHCP Server 
i13='因特网设置'; // Internet Settings 
i14='广域网 MAC地址'; // WAN MAC address 
i15='连接类型'; // Connection Type 
i16='子网掩码'; // Subnet mask 
i17='广域网 IP'; // Wan IP 
i18='缺省网关'; // Default gateway 
i19='DNS地址'; // DNS Address 
i20='特性'; // Features 
i21='网络地址转换'; //NAT  
i22='防火墙设置'; // Firewall Settings 
i23='SSID'; 
i24='安全'; //Security
i25='打印机'; // Printer 
i26='(启用/禁用)'; //(enable/disable)
i27='在更改任何设定前，您必须先登录'; // You will need to log in before you can change any settings.
i28='打印服务器/打印机'; // Print Server / Printer 
i29='打印服务器名称'; // Print Server Name 
i30='FTP打印'; // FTP Printing 
i31='RAW TCP/IP打印'; // RAW TCP/IP Printing 
i32='WLAN settings';
i33='UPnP';
i34='WLAN MAC';
i35='System date/time';
langt='语言'
langc='简体中文'
ld1='局域网 > DHCP'; // LAN > DHCP 
ld2='局域网 > DHCP用户名单'; // LAN > DHCP Client List 
ld3='此页显示您网络中每一台电脑的IP地址、主机名称与MAC地址。如果电脑没有特定的主机名称，可将主机名称栏目留白。请按"重新整理"来重新整理清单'; // This page shows you the IP address, Host Name and MAC address of each computer that is connected to your network. If the computer does not have a host name specified, then the Host Name field will be blank. Pressing "Refresh" will update the list.
ld4='IP地址'; // IP Address 
ld5='主机名称'; // Host Name 
ld6='MAC地址'; // MAC Address 
lm1='局域网'; // LAN 
lm2='您的路由器是由DHCP指定您网络中每一台电脑的IP地址，DHCP服务器运行时大部份时间会使用原厂设定值，若您需要更改，可以随时更改'; // Your Router is equipped with a DHCP server that will automatically assign IP addresses to each computer on your network. The factory default settings for the DHCP server will work in most any application. If you need to make changes to the settings, you can do so.
lm3='您所能更改的设定为:'; // The changes that you can make are:
lm4='- 更改路由器的IP地址，缺省值为：192.168.2.1'; // - Change the Internal IP address of the Router. The default = 192.168.2.1
lm5='- 更改子网掩码地址，缺省值为：255.255.255.0'; //- Change the Subnet Mask. The default = 255.255.255.0
lm6='- 启用/禁用DHCP服务器功能，缺省值为：启用'; //- Enable/Disable the DHCP Server Function. Default= ON (Enabled)
lm7='- 指定开始与结束IP地址清单。开始缺省值为2，结束为100'; //- Specify the Starting and Ending IP Pool Address. Default = Starting: 2 / Ending: 100
lm8='- 指定一个IP地址租赁时间，缺省值为：永远'; //- Specify the IP address Lease Time. Default= Forever 
lm9='- 指定一个当地的网域名称，缺省值为：NONE'; //- Specify a local Domain Name. Default = Belkin 
lm10='若需更改设定，请选在左边栏目的"局域网设置"'; // To make changes, click "LAN Settings" on the LAN tab to the left.
lm11='路由器给出您一个连接到电脑的用户列表。要检查此列表，请按"局域网设置"下的"DHCP用户清单"'; // The Router will also provide you with a list of all client computers connected to the network. To view the list, click "DHCP client list" on the LAN tab to the left.
ls1='局域网>局域网设置'; // LAN > LAN Settings 
ls2='您可以在此更改局域网设置。若要更改生效，请选取"套用变更"'; // You can make changes to the Local Area Network (LAN) here. For changes to take effect, you must press the "Apply Changes" button at the bottom of the screen.
ls3='IP地址'; // IP Address 
ls4='子网掩码'; // Subnet Mask 
ls5='DHCP服务器'; // DHCP server 
On='启用'; //On
Off='禁用'; // Off 
all='all';
Auto='Auto'; 
langt='语言';
langc='简体中文';
langcl='当前语言';
langal='可用语言';
ls6='DHCP服务器能简易地透过设定网络中的每台电脑一个IP地址来建立网络。您可以不必更改任何内容。'; // The DHCP server function makes setting up a network very easy by assigning IP addresses to each computer on the network. It is not necessary to make any changes here.
ls7='IP地址池开始地址'; // IP Pool Starting Address 
ls8='IP地址池结束地址'; // IP Pool Ending Address 
ls9='租赁时间'; //Lease Time
ls10='永远'; // Forever 
ls11='半小时'; // Half Hour 
ls12='一小时'; //1 Hour 
ls13='两小时'; // Two Hours 
ls14='半天'; //Half Day 
ls15='一天'; //One Day 
ls16='两天'; // Two Days 
ls17='一周'; // One Week 
ls18='两周'; // Two Weeks 
ls19='DHCP服务器能够为每台电脑在指定的时间内预留特定的IP地址'; // The length of time the DHCP server will reserve the IP address for each computer.
ls20='本地网域名称'; // Local Domain Name 
Optional='可选项目'; // Optional 
ls21='让您为您的网络命名'; // A feature that lets you assign a name to your network.
lsipm='您可能尚未输入所有IP地址，或是部份您所输入的数字是不正确的。IP地址的数字应界于0至255之间。'; // Either you have not entered all of the numbers  or some of the numbers you entered are invalid. The number in each entry box should be between 0 and 255.
lssm='您所输入的子网掩码是不正确的'; // The Subnet mask number you entered is invalid.
lsnetm='IP地址值应与IP网关地址一样位于一样的子网掩码中'; // The IP pool must be in the same subnet as the gateway IP 
lsendm='结束的IP地址必须大于开始的IP地址'; // The ending IP address must be larger than the starting IP address.
lspoolm='局域网的IP地址不能来自于DHCP地址池'; // The LAN IP address can not be in the DHCP address pool.
lsipm2='不正确的局域网IP地址，最后一个数字不可为0或255'; // Invalid Lan Ip address, the last number cannot be 0 or 255
lsipm3='不正确的局域网IP地址，最后一个数字不可为127或0'; // Invalid Lan Ip address, the first number cannot be 127 or 0
lsldnm='不正确的网域名称'; // Invalid Local Domain Name 
lsipm4='您输入的IP地址不正确'; // The IP that you entered is invalid 
lsipalert='请手动更改浏览器地址输入栏到新的局域网IP地址'; // Please change the Address entry box in the status bar of your browser manually to the new lan address 
lsipm5='您所选的IP地址应为non-routable，IP.\n  192.168.x.x (x可以界于0和255.) \n10.x.x.x (x可以界于0和255.)\n172.y.x.x (y可为界于16和31的任何数字, 而且x 可界于0和255.)'; // The IP address you choose should be a non-routable IP.\n  192.168.x.x (where x is anything between 0 and 255.) \n10.x.x.x (where x is anything between 0 and 255.)\n172.y.x.x (where y is anything from 16 to 31, and x is anything between 0 and 255.)
lsipc='您确定要更改局域网IP地址吗？'; // Do you really wish to change the LAN IP address?
lo1='登录'; // Login 
lo2='在您做出任何更改前，您需要用一个密码登录。如果您尚未设定您个人的密码，请将此栏留白然后选取'; // Before you can change any settings, you need to log in with a password. If you have not yet set a custom password, then leave this field blank and click "Submit."
lo3='密码'; // Password 
lo4='缺省值＝留白'; // Default = leave blank 
Clear='清除'; // Clear 
Submit='提交'; // Submit 
le1='Belkin | 登录错误'; // Belkin | Login Error 
lerror='登录错误';  // Login Error !!
Utilities='工具程序 > '; // Utilities >
rs1='重新启动成功'; // Reset Successfully 
rs2='当电源灯停止闪烁时表示重新启动已经完成'; //The reset is complete when the power light stops blinking.
rs3='路由器正在启动中'; // Router is rebooting 
rs4='所剩秒数'; // seconds remaining.
rf1='恢复出厂设置值成功'; // Restore factory defaults Successfully 
rf2='当电源灯停止闪烁时表示重新恢复已经完成'; // The restore is complete when the power light stops blinking.
rss1='恢复设定成功'; // Restored Settings Successfully 
rss2='当电源灯停止闪烁时表示重新恢复已经完成'; // The restored settings is complete when the power light stops blinking.
ufy1='恢复出厂设置'; // Restore factory defaults 
ufy2='使用此选项可以将所有设定恢复为原厂设定值。我们建议您在恢复所有默认值前，请先储存您的设定值。若要恢复原厂设定值，请按下方的"恢复默认值"键'; // Using this option will restore all of the settings in the Router to the factory (default) settings. It is recommended that you backup your settings before you restore all of the defaults. To restore the factory default settings, click the "Restore Defaults" button below.
ufy3='警告: 您所有的设定都会消失，\n您确定要继续吗?'; // WARNING: All Your Settings Will be Lost!\nAre You Sure You want to do this?
ufy4='恢复默认值需要九十秒的时间。请不要在过程中关闭电源'; // Restoring the default settings will take up to 60 seconds. Do not turn off power to the Router during this process.
ufy5='将不会恢复原厂默认值。没有任何设定会消失。'; // Will Not Restore Factory Defaults.No Settings Will be lost!
ufy='恢复默认值'; // Restore Defaults 
ufe1='工具程序>Firmware更新'; // Utilities > Firmware update 
ufe2='有时贝尔金会发布新版本的软体。更新版的软体包含了可以修改现有问题的补丁程序。请按下方按键检查是否有新的软体更新版本'; // From time to time, Belkin may release new versions of the Router\'s firmware. Firmware updates contain improvements and fixes to problems that may have existed. Click the link below to see if there is a new firmware update available for this Router.
ufe3='注意: 在更新软体版本前，请先储存您现在的设定'; // NOTE: Please backup your current settings before updating to a new version of firmware.
ufe4='请按此'; //Click Here 
ufe5='到这里储存/备份现有设定'; // to go to the Save/Backup current settings page.
ufe6='按此获得新的Firmware版本'; // Check For New Firmware Version >
ufe7='检查软体'; // Check Firmware 
ufe8='更新软体'; // Update Firmware >
Update='更新'; // Update 
ufe9='请指定更新档案的位置。请输入档案路径和档案名称。按"浏览"来寻找档案位置'; // Please specify the upgrade file\'s location. Either type the file\'s path and file name or click \"Browse\" to browse to the file\'s location.
ufe10='您确定您要继续更新吗?'; // Are you sure you want to continue with upgrading?
ufe11='在升级的最后，路由器大约在一分钟内暂时不会有响应。这是很正常的现象，请不要关闭电源或重新启动'; // At the end of the upgrade, the Router may not respond to commands for as long as one minute. This is normal. Do not turn off or reboot the Router during this time.';
um1='改屏幕能让您使得不同的参数与特定的管理功能协调运作';// This screen lets you manage different parameters of the Router and perform certain administrative functions.
um2='家长控制'; // Parental Control 
um3='贝尔金的Parental Control能保护您和您的孩子远离不健康的网络内容'; // Belkin\'s Parental Control protects you and your kids from objectionable content on the web.
um4='贝尔金的Parental Control是您设定的过滤网。现在您可以和您的孩子一同浏览网络，您不在时也可放心让孩子浏览<br>&nbsp;'; // Belkin\'s Parental Control is the filter you set up. Now you can surf the net with your kids even when you are not there.<br>&nbsp;
um5='重新启动路由器'; // Restart Router 
um6='有时后不一定需要重新启动路由器。当路由器开始不正常运作时，重新启动不会删除任何您的配置设定'; // Sometimes it may be necessary to Reset or Reboot the Router if it begins working improperly. Resetting or Rebooting the Router will not delete any of your configuration settings.
um7='恢复出厂设置'; // Restore Factory Defaults 
um8='选用此选项能让您将所有设定恢复为出厂设定值。建议您先备份您的设定再恢复所有默认值'; // Using this option will restore all of the settings in the Router to the factory (default) settings. It is recommended that you backup your settings before you restore all of the defaults.
um9='保存/备份现在设置'; // Save/Backup Current Settings 
um10='您可使用此功能储存您目前的配置设定。保存您的配置设定可以让您在稍后更改或不小心遗失时恢复。我们建议您在Firmware更新前先备份您的配置设定值。'; // You can save your current configuration by using this feature. Saving your configuration will allow you to restore it later if your settings are lost or changed. It is recommended that you backup your current configuration before performing a firmware update.
um11='恢复先前保存的设置值'; // Restore Previous Saved Settings 
um12='此选项能让您恢复先前所储存的配置设定'; // This option will allow you to restore a previously saved configuration.
um13='Firmware更新'; // Firmware Update 
um14='有时贝尔金会发布新版本的Firmware。更新版的Firmware包含了可以修改现有问题的信息。'; // From time to time, Belkin may release new versions of the Router\'s firmware. Firmware updates contain feature improvements and fixes to problems that may have existed.
um15='系统设定'; // System Settings 
um16='您可以在系统设定页面设定管理者密码'; // The System Settings page is where you can enter a new administrator password 
um17='设定时区，开启远程管理并开启或关闭NAT功能'; //, set the time zone, enable remote management and turn on and off the NAT function 
um18='路由器的'; // of the Router.
upc1='工具程序 > 家长控制'; // Utilities > Parental Control 
upc2='贝尔金“家长控制”保护您和您的孩子与员工远离不健康的网络内容。家长控制可以预先配置并阻挡不健康的内容。您可以轻易地选择将任何网站永远阻挡或是永远允许'; // Belkin\'s Parental Control protects you and your children/employees from objectionable content on the web. Parental Control comes pre-configured to block many types of web content, but is custom configurable to be more or less restrictive. Any web site can easily be set to be either, always blocked, or always allowed.
upc3='您现在Parental Control定制状况为'; // Your Parental Control Subscription is 
upc4='未启用'; // UN-ACTIVATED 
upc5='无法启用'; // NOT-ACTIVATED 
upc6='启用'; // ACTIVATED 
upc7='请按此停止Parental Control录入'; // To stop PARENTAL CONTROL signup prompts, Click here:
upc8='过期'; // EXPIRED 
upc9='您的定制将在XXX到期'; // Your subscription will expire in 
days='天数'; //days 
upc10='帐号资料'; // Account information 
Advanced='进阶'; // Advanced 
Apply='应用'; // Apply 
upc11='重新整理帐户信息'; // Refresh Account information 
upc12='报告'; // Reporting 
upc13='您现在'; // You are currently 
upc14='提交到报告'; // subscribed to reporting.
not='不'; // not 
upc15='按此检查报告样本'; // Click here to see a sample of how reporting works.
upc16='报告样本'; // Reporting Sample 
upc17='按此申请报告'; //Click here to signup for reporting.
upc18='现在定制'; // Subscribe Now 
upc19='按此查看您的报告'; // Click here to view your report.
upc20='检查报告'; // View Report 
upc21='家长控制状态'; // Parental Control Status 
upc22='将Parental Control过滤开放或关闭'; // Turn Parental Control Filter ON and OFF.
upc23='网络防火墙现在正工作'; // Web Filter is currently 
ON='启用'; // ON 
OFF='禁用'; // OFF 
pwd='密码'; // Password 
upc24='电子邮件提醒'; // e-mail Notification 
upc25='如果“家长控制”无效请以电子邮件通知我'; // Notify me by e-mail if the Parental Control is overridden.
upc26='电子邮件正在工作'; // Email is currently 
upc27='修改规定'; // Modify policy 
upc28='检查您Parental Control设定值的规则，请按此'; // To view or change Default Policies for your Parental Control, click here';
Modify='修改'; // Modify 
upc29='家长控制申请'; // Parental Control Sign-up 
upc30='贝尔金的“家长控制”能保护您和您的孩子远离网络上不佳的内容。贝尔金“家长控制”是由您所设定的防火墙 ，现在您可以随意浏览网络，甚至不需担心您的孩子单独浏览'; // If you wish to sign up for Belkin\'s Parental Control feature, please click the button below.
upc31='您现在并无定制“家长控制”服务'; // You are currently <b>NOT</b> subscribed to the Parental Control service.
upc32='更新“家长控制”'; // Parental Control Renew 
upc33='您的定制即将过期，请更新您的定制'; // Your subscription is close to the expiration date. Please click to renew your subscription.
upc34='马上更新'; // Renew Now 
upc35='URL是空白的'; // url is empty 
upa1='工具程序&gt; “家长控制”帐户资讯'; // Utilities &gt; Parental Control Account Information 
upa2="您可以更改“家长控制”用户信息例如: “家长控制”提示电子邮件与“家长控制”管理员密码"; // You can change your Parental Control user information here such as the Parental Control notification e-mail address and the Parental Control administrator password.
upa3='更改 “家长控制”提示电子邮件地址'; // Change Parental Control notification e-mail address.
upa4='您现在使用的电子邮件地址'; // your current e-mail address 
upa5='输入您新的电子邮件地址'; // Enter your new e-mail address 
upa6='再次确认您的新的电子邮件地址'; // Re-enter your new e-mail address 
upa7='更改您“家长控制”的管理员密码'; // Change Parental Control Administrator Password 
upa8='输入您的新密码'; // Enter your new password 
upa9='再次输入您的新密码'; // Re-enter your new password 
upa14='电子邮件地址无效';
Change='更改'; // Change 
Stop='应用'; // Apply 
upad1='工具程序 &gt; 家长控制进阶设置值无效'; // Utilities &gt; Parental Control Advanced Settings 
upad2='Belkin “家长控制”需要Cerberian(我们的伙伴)网络浏览人数计数器。在一般的状况之下，回应时间会少于一秒，所以不会有延迟。然而，当您向Cerberian要求一个很少人浏览的网页时，他们会不断更新计数器，这可能会花数秒的时间，取决于网站下载的时间。'; // Belkin's Parental Control requires an Internet rating response from Cerberian (our partner) for every web site requested. Normally, response time is less than 1 second causing virtually no delay. However when you request a rare site that is not in their data base, they rate the site dynamically, which can take a few seconds depending on how fast the site loads. If the response time is slower than the time interval below, PARENTAL CONTROLS can be configured to either: Allow all sites on timeouts, or Block all sites on timeouts.
Timeout='超时'; // Timeout 
upad3='超时等待时间'; // Timeout after waiting 
upad4='需数秒等待回应'; // seconds for a response 
upad5='超时发生后的缺省行为'; // Default behavior when timeout occurs 
upad6='设定当超过登录时间默认值，路由器会根据此设定阻挡或允许所有浏览的网页'; // Setting the default behavior when timeout occurs, the router will block/pass all the web surfing according to the setting.
upad7='准许所有网页超时'; // Allow all sites on timeout.
upad8='阻挡所有网页超时'; // Block all sites on timeout.
upr1='工具程序 > 家长控制 帐户更新'; // Utilities > Parental Control Account Refresh 
upr2='当您的“家长控制”定制功能不正确时，<br>您才需要此功能。请按下此键，路由器将会下载或重新整理所有贝尔金帐户信息。<br>欲重新整理您的“家长控制”路由器帐户信息，请按"重新整理"'; // This function is only necessary if your PARENTAL CONTROL subscription information is not correct.<br>By pressing this button, the router will download/refresh all account information from Belkin.<br>To refresh your PARENTAL CONTROL router account information, click Refresh:
uprev1='工具程序 > 恢复之前储存的设定'; // Utilities > Restore previous saved settings 
uprev2='这个选择可以恢复您之前的配置值'; // This option will allow you to restore a previously saved configuration.
Restore='恢复'; // Restore 
uprev3='输入含有备份设置值的档案名称'; // Type the name of the file that contains the backup settings.
uprev4='您要继续恢复设置值吗？'; // Do you want to continue and restore settings?
uprev5='在恢复设定后，路由器可能在一分钟内暂时不会有回应，\n\n这是很正常的现象，请勿关闭路由器电源'; // After settings are restored, the Router may not respond\n to commands for as long as one minute.\n\nThis is normal. Do not power down the Router during this time.
ur1='工具程序 > 重启路由器'; // Utilities > Restart Router 
ur2='当路由器开始不正常运作时，有时候您可能必须重新启动路由器。重新启动并不会使您的设置设定值消失，&quot;请按下方按键&quot;重新启动'; // Sometimes it may be necessary to Restart or Reboot the Router if it begins working improperly. Restartting or Rebooting the Router will not delete any of your configuration settings. Click the &quot;Restart  Router&quot; button below to Restart the Router.
ur3='重新启动'; // Restart Router 
ur4='您确定要重新启动吗？重新启动不会更改您的配置'; // Are you sure you want to restart the Router? Restarting the Router will not affect your configuration.
ur5='路由器需要六十秒的时间重新启动。在重新启动完成前请勿将电源关闭'; // Allow up to 60 seconds for the Router to restart. Do not power down the Router before reset completes.
usave1='工具程序 > 保存/备份现在的配置值'; // Utilities > Save/Backup current settings 
usave2='您可以现在储存您的配置'; // You can save your current configuration by using this feature. Saving your configuration will allow you to restore it later if your settings are lost or changed. It is recommended that you backup your current configuration before performing a firmware update.
Save='保存'; //Save
usys1='工具程序 > 系统设定'; // Utilities > System settings 
usys2='管理者密码'; // Administrator Password: 
usys3='此路由器并未设定任何密码，为了确保安全，您可以在此设定一组密码'; // The Router ships with NO password entered. If you wish to add a password for more security, you can set a password here.
usys4='输入现在的密码'; // Type in current Password 
usys5='输入新的密码'; // Type in new Password 
usys6='确认新的密码'; // Confirm new Password 
usys7='登录持续时间'; // Login Timeout 
usys8='1-99分钟'; //(1-99 minutes)
usys9='时间和时区'; // Time and Time Zone: 
January='一月'; February='二月'; March='三月'; April='四月'; May='五月'; June='六月'; July='七月'; August='八月'; September='九月'; October='十月'; November='十一月'; December='十二月';
usys10='请设定您所在的时区。如果您在夏时制时区(指在夏季把标准时间拨早1小时的时区)，请按此处'; // Please set your time Zone. If you are in an area that observes daylight saving check this box.
usys11='时区'; // Time Zone 
usys12='(GMT-12:00) 瓜加林岛'; //(GMT-12:00) Enewetak, Kwajalein 
usys13='(GMT-11:00) 萨摩亚'; //(GMT-11:00) Midway Island, Samoa 
usys14='(GMT-10:00) 夏威夷'; // Hawaii 
usys15='(GMT-09:00) 美国阿拉斯加州'; // Alaska 
usys16='(GMT-08:00) 太平洋时区(美国与加拿大) '; // Pacific Time (US & Canada); Tijuana 
usys17='(GMT-07:00) 美国亚历桑那州'; // Arizona 
usys18='(GMT-07:00) 美国与加拿大山区'; // Mountain Time (US & Canada)
usys19='(GMT-06:00) 美国与加拿大中部'; // Central Time (US & Canada)
usys20='(GMT-06:00) 美国与加拿大中部'; //Mexico City, Tegucigalpa
usys21='(GMT-06:00) 萨克斯其万省'; //Saskatchewan
usys22='(GMT-05:00) 利马(秘鲁首都) '; // Bogota, Lima, Quito 
usys23='(GMT-05:00) 美国与加拿大东部'; // Eastern Time (US & Canada)
usys24='(GMT-05:00) 美国印第安纳州'; // Indiana (East)
usys25='(GMT-04:00) 大西洋(加拿大)'; // Atlantic Time (Canada)
usys26='(GMT-04:00) 卡拉卡斯(委内瑞拉首都)，拉巴斯(玻利维亚之首都) '; // Caracas, La Paz 
usys27='(GMT-04:00) 圣地亚哥(智利首都) '; //Santiago 
usys28='(GMT-03:00) 纽芬兰(加拿大东海岸的岛屿) '; // Newfoundland 
usys29='(GMT-03:00) 巴西'; // Brasilia 
usys30='(GMT-03:00) 布宜诺斯艾利斯(阿根廷首都)，乔治城(南美盖亚那共和国首都) '; // Buenos Aires, Georgetown 
usys31='(GMT-02:00) 大西洋中部'; // Mid-Atlantic 
usys32='(GMT-01:00) 亚速尔群岛'; // Azores, Cape Verde Is.
usys33='(GMT) 卡萨布兰卡市(摩洛哥海滨)，蒙罗维亚(赖比瑞亚首都) '; // Casablanca, Monrovia 
usys34='(GMT) 格林威治时间：都伯林、爱丁堡'; // Greenwich Mean Time: Dublin, Edinburgh 
usys35='(GMT) 格林威治时间：里斯本、伦敦'; // Greenwich Mean Time: Lisbon, London 
usys36='(GMT+01:00) 阿姆斯特丹、柏林、伯恩、罗马'; // Amsterdam, Berlin, Bern, Rome 
usys37='(GMT+01:00) 斯德哥尔摩、维也纳、贝尔格勒(南斯拉夫首都) '; // Stockholm, Vienna, Belgrade 
usys38='(GMT+01:00) 伯拉第斯拉瓦(捷克)、布达佩斯(匈牙利首都)、卢布尔雅那(斯洛维尼亚共和国首都) '; // Bratislava, Budapest, Ljubljana 
usys39='(GMT+01:00) 布拉格、布鲁塞、哥本哈根、马德里'; // Prague,Brussels, Copenhagen, Madrid 
usys40='(GMT+01:00) 巴黎、维尔纽斯(立陶宛共和国首都)、塞拉耶佛(玻兹尼亚泽哥维那共和国首都)、史可普列(马其顿共和国首都) '; // Paris, Vilnius, Sarajevo, Skopje 
usys41='(GMT+01:00) 华沙(波兰首都)、札格拉布(克罗埃西亚共和国首都) '; // Sofija, Warsaw, Zagreb 
usys42='(GMT+02:00) 雅典、伊斯坦堡、明斯克(白俄罗斯首都) '; // Athens, Istanbul, Minsk 
usys43='(GMT+02:00) 布加勒斯特(罗马尼亚首都) '; // Bucharest 
usys44='(GMT+02:00) 开罗'; // Cairo 
usys45='(GMT+02:00) 普利托里亚(南非行政首都) '; // Harare, Pretoria 
usys46='(GMT+02:00) 赫尔辛基、里加(拉脱维亚共和国首都)、 塔林(爱沙尼亚共和国首都) '; // Helsinki, Riga, Tallinn 
usys47='(GMT+02:00) 以色列'; // Israel 
usys48='(GMT+03:00) 巴格达(伊拉克首都)、科威特、奈洛比(肯亚共和国首都)、利雅德(沙特阿拉伯) '; // Baghdad, Kuwait, Nairobi, Riyadh 
usys49='(GMT+03:00) 莫斯科(俄罗斯首都) '; // Moscow, St. Petersburg 
usys50='(GMT+03:00) 德黑兰(伊朗首都) '; // Tehran 
usys51='(GMT+04:00) 阿布达比(阿拉伯联合大公国之首都)、马斯喀特(阿曼首都)、第比利斯(格鲁吉亚共和国首都) '; // Abu Dhabi, Muscat, Tbilisi, Kazan 
usys52='(GMT+04:00) 喀布尔(阿富汗首都) '; // Volgograd, Kabul 
usys53='(GMT+05:00) 伊斯兰马巴德(巴基斯坦首都)、喀拉蚩港市(巴基斯坦) '; // Islamabad, Karachi, Ekaterinburg 
usys54='(GMT+06:00) 达卡(孟加拉首都) '; // Almaty, Dhaka 
usys55='(GMT+07:00) 曼谷、雅加达、河内'; // Bangkok, Jakarta, Hanoi 
usys56='(GMT+08:00) 北京、重庆、乌鲁木齐'; //Beijing, Chongqing, Urumqi
usys57='(GMT+08:00) 香港、柏斯、新加坡、台北'; // Hong Kong, Perth, Singapore, Taipei 
usys58='(GMT+09:00) 东京、大阪、札幌、亚库次克'; // Toyko, Osaka, Sapporo, Yakutsk 
usys59='(GMT+10:00) 布里斯本'; // Brisbane 
usys60='(GMT+10:00) 坎培拉、墨尔本、雪梨'; // Canberra, Melbourne, Sydney 
usys61='(GMT+10:00) 关岛、摩尔斯比港(巴布亚新几内亚之首都)、海参崴'; // Guam, Port Moresby, Vladivostok 
usys62='(GMT+10:00) 哈伯特'; //Hobart
usys63='(GMT+11:00) 马喀丹州(俄罗斯)、新喀里多尼亚'; // Magadan, Solamon, New Caledonia 
usys64='(GMT+12:00) 斐济、堪察加半岛(西伯利亚)'; // Fiji, Kamchatka, Marshall Is.
usys65='(GMT+12:00) 威灵顿、奥克兰'; // Wellington, Auckland 
usys66='日光节约时间'; // Daylight Savings 
usys67='自动调整到节约日光时区'; //Automatically Adjust Daylight Saving
 
usys68='远程管理'; // Remote Management:
AF='进阶功能'; // ADVANCED FEATURE!
usys69='远程管理能让您从网络上的任何地方更改路由器的设定，在您开启此功能前 '; // Remote management allows you to make changes to your Router\'s settings from anywhere on the Internet. Before you enable this function,
usys70='请确认您已设定管理者密码'; // MAKE SURE YOU HAVE SET THE ADMINISTRATOR PASSWORD.
usys71='任何IP地址皆可远程管理路由器'; // Any IP address can remotely manage the router.
usys72='只有此IP地址可远程管理路由器'; //Only this IP address can remotely manage the router 

usys73='NAT启用'; // NAT Enabling:
usys74='允许您关闭Network Address Translation功能，在大多数的状况里您最好不要将此功能关闭'; // Allows you to turn the Network Address Translation feature off. In almost every case you would NOT want to turn this feature off. ';
usys75='NAT启用 / 禁用'; // NAT Enable / Disable 
 usys76='UPNP启用'; // UPNP Enabling: 
usys77='允许您开启或关闭UPNP功能。如果您使用此项功能来支持UPnP，开启UPnP能让这些应用程序自动安装到路由器 '; // Allows you to turn the UPNP feature of the Router on or off. If you use applications that support UPnP, enabling UPnP will allow these applications to automatically configure the router.
usys78='UPNP启用 / 禁用'; //UPNP Enable / Disable
usys79='自动更新 Firmware开启'; // Auto Update Firmware Enabling:
usys80='允许您自动检查路由器Firmware更新'; // Allows you to automatically check the availability of firmware updates for your router.
usys81='自动更新 Firmware开启 / 关闭'; // Auto Update Firmware Enable / Disable 
usys82='现在使用的密码是无效的'; // Current Password is invalid 
usys83='新的密码与更新后的密码不同'; // New Password and Re-new Password is different 
usys84='登录持续时间范围1-99'; // Login Timeout range: 1-99
usys85='密码长度不正确，最短3个数字，最长12个'; // Password length is invalid. The maximum password length is 12 and The minimum password length is 3
usys86='请手动更改状态栏的地址输入栏为预设LAN地址'; // Please change the Address entry box in the status bar of your browser manually to the default lan address 
usys87='我们强烈建议您设定管理者密码'; // It is strongly recommended that you set your Administrator password.
usys88='主 NTP 服务器'; //Primary NTP Server
usys89='备用 NTP 服务器'; // Backup NTP Server 
usys90='192.43.244.18-北美'; //192.43.244.18-North America 
usys91='132.163.4.102-北美'; //132.163.4.102-North America 
usys92='192.5.41.41-北美'; //192.5.41.41-North America 
usys93='192.5.41.209-北美'; //192.5.41.209-North America 
usys94='207.200.81.113-北美'; //207.200.81.113-North America 
usys95='208.184.49.9-北美'; //208.184.49.9-North America 
usys96='129.132.2.21-欧洲'; //129.132.2.21-Europe 
usys97='130.149.17.8-欧洲'; //130.149.17.8-Europe 
usys98='137.189.8.174-亚太地区'; //137.189.8.174-Asia Pacific 
usys99='远程访问端口'; // Remote Access Port 
usysipm='您可能未输入所有的IP地址或是部份您所输入的数字是不正确的。这些数字应界于0到255'; // Either you have not entered all the IP numbers or some of the numbers you entered are invalid. The numbers should be between 0 and 255
usysb1='此路由器未设定任何密码，如果您要提高安全性，您可在此输入密码'; // The Router ships with NO password entered. If you wish to add a password for more security, you can set a password here.
vjs1='不正确的IP地址，IP地址太长，请再次确认'; // Invalid IP address, too long, Please check again 
vjs2='不正确的IP地址，少了\'.\'，请再次确认!'; // Invalid IP address, missing \'.\' , Please check again!
vjs3='不正确的IP地址，在\'.\'之间少了一些号码，请再次确认'; // Invalid IP address, missing numbers between \'.\', Please check again!
vjs4="不正确的IP地址，有多余的'.'，请再次确认" ; // Invalid IP address, extra '.' , Please check again!
vjs5='不正确的IP地址，在\'.\'之间号码太长，请再次确认!'; // Invalid IP address, numbers between \'.\' are too big, Please check again!
vm1='不正确的字母'; // Invalid Character 
vm2='位置'; // at Position 
vm3='必须为'; //Must be 
vjs6='不正确的年份格式，请输入为(例如:2002)'; // Invalid year format, please enter as (e.g. 2002)
vm4='不正确的号码'; // Invalid number 
vjs8='不正确，必需介于1970..2037'; // Invalid,must between 1970..2037
vjs9='不正确的月份格式，请输入'; //01...12 Invalid month format, please enter as (e.g. 01...12)
vjs10='请先输入年份与月份'; // Please enter Year and Month First 
vjs11='不正确的日期格式，请输入01...31，某些月份可能只有00..28'; // Invalid day format, please enter as (e.g. 01...31), some month may only as (00...28)
vjs12='不正确的小时格式，请输入00...23'; // Invalid hour format, please enter as (e.g. 00...23)
vjs13='不正确的分钟格式，请输入00…59 '; // Invalid minute format, please enter as (e.g. 00...59)
vjs14='不正确的MTU值，其需介于1440…1454'; // Invalid MTU, must be between 576...1492
vjs15='不正确的MRU值，其需介于128…65535'; // Invalid MRU, must be between 128...65535
vjs16="无效 IP ：";  //Invalid Ip:
vjs161="超出";  // not in
vjs162="网络掩码"; // netmask 
vjs17='您输入两组不一样的密码，请再次确认'; // You typed two different passwords, please double check again!
vjs18='请输入开始连接端口的数值'; // Please enter start port number.
vjs19='开始连接端口值必须小于结束端口值'; // Start port number should be smaller than end port number.
vjs20='不正确的连接端口值，连接端口值应为一正整数'; // Invalid port number, port numbers should be positive integer 
vjs21='不正确的长度'; // Invalid Length 
vjs22='不正确的位置格式';// Invalid Format at position 
vjs221='!必须为: '; //! Must be :
vjs23='不正确的MAC地址，其为一广播地址'; // Invalid MAC address, it is a broadcast address.
vjs24='不正确的MAC地址，其为空地址'; // Invalid MAC address, it is a null address 
vjs25='不正确的MAC地址，其为广播地址'; // Invalid MAC address, it is a mutlicast address.
vjs26='不正确的开头或末尾IP地址，末尾IP地址应大于开始IP地址'; // Invalid start and end IP address, end IP should be larger than start IP 
vjs27='不正确的数字， 必须介于1到65535'; // Invalid number! Must between 1..65535
vjs28='不正确的子网掩码格式'; // Invalid netmask format.
vjs29='不正确的子网掩码格式，子网掩码必须是：255.255.255.0 or 255.255.255.128 or 255.255.255.192 or 255.255.255.224 or 255.255.255.240 or 255.255.255.248 or 255.255.255.252 or 255.255.255.254'; // Invalid format, netmask here must be 255.255.255.0 or 255.255.255.128 or 255.255.255.192 or 255.255.255.224 or 255.255.255.240 or 255.255.255.248 or 255.255.255.252 or 255.255.255.254
vjs30='不正确的IP地址，其最后一码不能为0或255'; // Invalid Ip address, the last number cannot be 0 or 255
vjs31='不正确的局域网IP地址，其第一码不能为127'; // Invalid Lan Ip address, the first number cannot be 127
vjs32='不正确的局域网IP地址，其不能为0.0.0.0'; // Invalid Lan Ip address, cannot be 0.0.0.0
vjs33='不正确的局域网IP地址，其必需低于224.0.0.0'; // Invalid Lan Ip address, must under 224.0.0.0
vjs34='正确的范围是：'; // Valid range is 
vp1='该网站被“家长控制”阻挡'; // This web site is blocked by PARENTAL CONTROL 
vp2='这已经被“家长控制”禁止并归类为：'; // is prohibited by PARENTAL CONTROL and categorized as: 
vp3='若您不认同此分级，并希望此网站被重新分级，请按不同意'; // If you disagree with the rating and want the site to be re-rated, click Disagree:
vp4='若您要修改“家长控制”的规定，请按更改'; // If you would like to modify the policies for PARENTAL CONTROL, click Change:';
vp5='取消您的规定(仅限本台电脑)，请输入密码并选取消'; // To override your policies (this computer only) for 1 hour, input password and click Override:
Disagree='不同意'; // Disagree 
Change='更改'; // Change 
Override='取消'; //Override
wc1='广域网 > 连接类型'; // WAN > Connection Type 
wc2='选择您的连接类型'; // Select your connection type:
wc3='动态IP '; // Dynamic 
wc4='动态类型的连接是最普遍的。如果您使用Cable调制解调器，您比较有可能是用动态连接。如果您有一个Cable调制解调器或您不确定你的连接类型，请使用这个'; // A Dynamic type of connection is the most common. If you use a cable modem, then most likely you will have a dynamic connection. If you have a cable modem or you are not sure of your connection type, use this.
wc5='静态'; // Static 
wc6='一个静态IP地址连接类型较不为普遍。当您的ISP供应商提供您一个永不改变的IP地址时您才使用这个选项'; // A Static IP address connection type is less common than others. Use this selection only if your ISP gave you an IP address that never changes.
wc7=' PPPoE '; // PPPoE 
wc8='如果您使用ADSL调制解调器或您的ISP提供您一个使用者名称与密码，那幺您的连接类型就为PPPoE，请使用此种连接类型'; // If you use a DSL modem and/or your ISP gave you a User Name and Password, then your connection type is PPPoE. Use this connection type.
wc9='PPTP'; 
wc10='[仅欧洲国家]　这种连接类型在欧洲国家最为普遍。如果您的ISP已告知您特别使用PPTP并已提供您正确的PPTP信息，您可使用此选项'; //[European Countries Only]. This type of connection is most common in European countries. If your ISP has specifically told you that you use PPTP and has supplied you with the proper PPTP information, then use this option.'; 
wc11=' Telstra BigPond '; // Telstra BigPond 
wc12='[仅澳洲] Telstra BigPond使用者请使用此选项来连接'; //[Australia Only] Users of Telstra BigPond Cable or DSL will use this option to configure the connection.
Next='下一步'; // Next 
wds1='广域网 > DNS '; // WAN > DNS 
wds2='如果您的ISP提供您一个特定的DNS地址，请在窗口中输入并点选"套用变更"'; // If your ISP provided you with a specific DNS address to use, enter the address in this window and click "Apply Changes".
wds3='自动从ISP获得'; // Automatic from ISP 
wds4='DNS地址'; // DNS Address 
wds5='次级DNS地址'; //Secondary DNS Address  
wds6='DNS意指网域名称系统，是指一个位于网络上翻译URL地址，例如www.belkin.com为一个IP地址'; // DNS = Domain Name Server. A server located on the Internet that translates URL\'s (Universal Resource Links) like www.belkin.com to IP addresses.
wds7='如果您不启用自动DNS功能的话，您必须输入ISP所提供的DNS设定'; // You must enter the DNS settings provided by your ISP if you don\'t use the Automatic DNS function 
wdy1='广域网 > 连接类型 > 动态IP '; // WAN > Connection Type > Dynamic IP 
wdy2='输入您的动态IP地址，请输入以下信息并选取"套用变更"'; // To enter your Dynamic IP settings, type in your information below and click "Apply changes".
wdy3='主机名称'; // Host Name 
wdy4='主机名称是ISP连接是需要的'; // Host Name = A name that some Internet Service Providers require for connection to their system.
wdy5='更改广域网 MAC地址'; // Change WAN MAC Address 
wdy6='不正确的主机名称: ~!##$%^&*()=+{}[]|\'\\\":;?/.<>'; // Invalid Host Name: ~!@##$%^&*()=+{}[]|\'\\\":;?/.<> 
wmc1='广域网 > MAC地址'; // WAN > MAC address 
wmc2='部份ISP让您从电脑网卡上复制MAC地址到路由器。如果您不确定，只要复制在安装路由器前原本连接到Modem的电脑网卡的MAC地址。复制您的MAC地址不会造成任何问题'; // Some ISPs require that you clone (copy) the MAC address of your computer\'s network card into the Router. If you are not sure then simply clone the MAC address of the computer that was originally connected to the modem before installing the Router. Cloning your MAC address will not cause any problems with your network.
wmc3='广域网 MAC地址'; // Wan Mac Address 
wmc4='复制电脑 MAC地址';  //Clone Computer\'s MAC Address
wmc5='复制'; // Clone 
wm1='因特网/广域网'; // Internet/WAN 
WAN='广域网'; // WAN 
wm2='您可以在因特网/广域网 栏设定您的路由器来连接ISP。路由器能够与任何ISP虚拟连接，只要您能正确地将路由器设定与ISP的设定匹配。要将您的路由器与ISP连接，请按屏幕左边的"连接类型" '; // The Internet/WAN Tab is where you will set up your Router to connect to your Internet Service Provider. The Router is capable of connecting to virtually any Internet Service Provider\'s system provided that you have correctly configured the Router\'s settings for your ISP\'s connection type. To configure the Router to connect to your ISP, click on "Connection type" on the Internet/WAN Tab on the left of the screen.
wm3='支持连接类型'; // Connection types supported:
wm4='<b>动态IP:</b> 包括要求一个主机名称的ISP，其会连接至一个特定的MAC地址'; //<b>Dynamic:</b> including ISPs that require a host name and ISPs that bind the connection to a specific MAC address. 
wm5='<b>静态IP:</b> 路由器支持与有指定静态IP地址的ISP连接'; //<b>Static IP address:</b> the Router supports a connection to an ISP which assigns a static IP address. 
wm6='<b>PPPoE:</b> 以太网络使用的点对点协议 路由器支持PPPoE，其将要求PPPoE登录确认'; //<b>PPPoE:</b> the Router supports a dynamic connection type which requires a PPPoE login for authentication.
wm7='<b>PPTP:</b> 只限于欧洲用户 路由器支持透过PPTP连接到欧洲ISP'; //<b>PPTP:</b> For European users ONLY. The Router supports connections to European ISP\'s which connect via PPTP.
wm8='<b>Telstra BigPond:</b>';
wm9='只限于澳洲用户 路由器支持连接到Telstra BigPond '; // Australian users ONLY. The router supports connection to Telstra BigPond.'; 
wpe1='广域网 > 连接类型 > PPPoE'; // WAN > Connection Type > PPPoE 
wpe2='输入您的PPPoE设定，输入您以下的信息并选取"套用变更"'; // To enter your PPPoE settings, type in your information below and click "Apply changes".
wpe3='使用者名称'; // User Name 
wpe4='重新输入密码'; // Retype Password 
wpe5='服务名称(可填可不填)'; // Service Name (Optional)
wpe6=' MTU(1440-1454)'; // MTU (576-1492)
wpe7='请不要更改MTU值，除非您的ISP特别指定一个非1432的设定'; // Do not make changes to the MTU setting unless your ISP specifically requires a different setting than 1454.
wpe8='断线于'; // Disconnect after 
wpe9='无活动分钟 '; // minutes of no activity.
idlerangerro='您所输入的闲置时间是不正确的。这个号码可能介于1-99'; // Idle time of the numbers you entered are invalid.\n The number has to be an integer between 1-99.
wpe10='无效字符: <>&'; // Invalid character: <>&
pm='您的服务无法确认您所输入的密码。请确认您所输入的密码是正确的'; // Your service was not able to verify the password that you entered. Please confirm that you typed your password correctly.
wpe11='不正确的MTU值'; // Invalid MTU value 
wpe12='请输入您的使用者名称'; // Please enter your username 
wpp1='广域网 > 连接类型 > PPTP '; // WAN > Connection Type > PPTP 
wpp2='PPTP帐号'; // PPTP Account 
wpp3='PPTP密码'; // PPTP Password
wpp4='请再次输入密码'; // Retype Password 
wpp5='主机名称'; // Host Name 
wpp6='服务IP地址'; // Service IP Address 
wpp7='我的IP地址'; // My IP Address 
wpp8='我的子网掩码'; // My Subnet Mask 
wpp9='连接ID(选用项目) '; // Connection ID (optional)
wpp10='连接中断于'; // Disconnect after 
wpp11='无活动分钟数'; // minutes of no activity.
wpp12='请按此输入您的DNS设定'; //Click here to enter your DNS Settings
wpp13='请输入您的PPTP帐号'; // Please enter your PPTP Account 
wpp14='请再次输入密码'; // Please re-enter your password!
wpp15='请输入您的密码'; // Please enter your password!
ws1= '广域网 > 连接类型 > 静态IP '; // WAN > Connection Type > Static IP 
ws2='输入您的静态IP设定，请输入以下信息然后选取"套用变更"'; // To enter your Static IP settings, type in your information below and click "Apply changes".
ws3='IP地址'; // IP Address 
ws4='子网掩码'; // Subnet Mask 
ws5='ISP网关地址'; // ISP Gateway Address 
ws6='我的ISP是否提供超过一个静态IP地址？'; // My ISP Provides more than one Static IP address?
ws7='按此输入您的DNS设定'; // Click here to enter your DNS Settings 
dm='可能您尚未输入所有的DNS号码，或部份您所输入的号码不正确。此号码应介于0到255'; // Either you have not entered all the DNS numbers, or some of the numbers you entered are invalid. the numbers must be or between  0 and 255.
sm='您所输入的子网掩码数字是不正确的'; // The Subnet mask numbers you entered are invalid.
ws8='请在接下来的窗口输入您的DNS地址'; // Please enter/validate your DNS address settings on the following screen 
wsc1=' IP地址别名'; // Alias IP Address 
im='IP地址别名已满，无法再增加'; // The Alias IP Address list is full. Additional rules can not be created.
wt1='广域网 > 连接类型 > Telstra BigPond '; // WAN > Connection Type > Telstra BigPond 
wt2='如果您的网络服务是由澳洲的Telstra BigPond所提供，您需要输入以下的信息。这些信息由Telstra BigPond提供'; // If your Internet service is provided by Telstra BigPond in Australia, you will need to enter your information below. This information is provided by Telstra BigPond.
wt3='选取您的州'; // Select Your State 
wt4='使用者决定手动选取登录服务器'; // User decide login server manually 
wt5='登录服务器'; // Login Server 
Logout='退出'; // Logout 
wt6='请输入您的服务器IP或从清单中选择'; // Please enter your Server IP or select your state from the menu.
wla1='无线>设定为AP(接入点) '; // Wireless > Use as Access Point 
wlad1='路由器可以只限定用为一个AP无线接入点，屏蔽所有路由和防火墙功能。您可以选取"启用" 然后输入您想给AP指定的IP地址即可'; // The Router can be configured to act as strictly an Access Point, bypassing all of the routing and firewall functions. To do so, select "Enable" and type in the IP address you want the Access Point to have.
wlad2='启用/禁用'; // Enable / Disable 
wlae1='指定IP地址'; // Specify IP Address 
wlae2='子网掩码'; // Subnetmask 
wlae3='请在您的浏览器中手动更改输入栏的地址为局域网的地址'; // Please change the Address entry box in the status bar of your browser manually to the lan address 
wlae4='1)无线频道：路由器与AP必须相符<br>'+
      '2)安全设定：路由器与AP必须相符<br>'+
      '3)如果MAC过滤防火墙启用，使用者必须确定增加路由器和AP的无线局域网MAC地址才能够确保两者互相通信。<br>';
//	1) Wireless channels must match between Router and AP.<br>
//	2) Security settings (WEP) must match between Router and AP.<br>
//	3) If MAC filtering is enabled, user must be sure to add the WLAN MAC address(es) of the Router/AP in order to allow communication with each other.<br>
wlc1='无线 > 频道 与 SSID '; // Wireless > Channel and SSID 
wlc2='要更改路由器上的无线设定，请在此更改，然选取"套用变更"来保存变更'; // To make changes to the wireless settings of the router, make the changes here. Click "Apply Changes" to save the settings.
wlc3='无线频道'; //Wireless Channel
wlc4='SSID '; // SSID 
wlc5='无线模式'; // Wireless Mode 
wlc6='54G-Auto '; //802.11g-Auto 
wlc7='54G-Only '; //802.11g-Only 
wlc8='54G LRS '; //802.11g LRS 
wlc9='广播SSID '; // Broadcast SSID 
wlc10='增强模式'; //Turbo Mode
wlc11="启用 Turbo 模式允许路由器或访问点使用帧迸发获取从路由器或访问点到 802.11g 客户机的最大吞吐量。Turbo 模式与支持 Turbo 模式的 802.11g 客户机协同运行。使用最新驱动程序的 Belkin 802.11g 客户机支持 Turbo 模式。不支持 Turbo 模式的客户机在启用 Turbo 模式时正常运行。"; // Enabling Turbo Mode allows the Router or Access Point to use Frame Bursting to get the maximum throughput from the Router or Access Point to 802.11g clients. Turbo mode will work with 802.11g clients that support Turbo Mode. Belkin 802.11g Clients using the latest driver will support Turbo Mode. Clients that do not support Turbo Mode will operate normally if Turbo Mode is enabled.
wlc12='保护模式'; //Protected Mode
wlc13="注意: 在大多数的情况中，最佳状况(吞吐量)是将保护模式关闭。如果您使用HEAVY802.11b，最佳效能应为将保护模式关闭时"; // NOTE: In most situations, best performance (throughput) is achieved with Protected Mode OFF. If you are operating in an environment with HEAVY 802.11b traffic or interference, best performance may be achieved with Protected Mode ON.
wlc14='current channel';
wle1='无线 > 安全'; // Wireless > Security 
wle2='安全模式'; // Security Mode 
wle3='WPA-PSK(无服务器)'; // WPA-PSK(no server)
wle4='128位WEP '; //128bit WEP 
wle5='64位WEP '; //64bit WEP 
wle6='WPA (有Radius服务器)'; // WPA(with Radius Server)
wle7="您可以在此设定无线安全/加密。安全开启时可确保最大值的无线安全。WPA提供的是不断随机改变的加密代码以及指定出最佳的保全解决方案。在无线环境里，并非所有的设备都能支持WPA，所以就必须使用WEP"; // You can configure wireless security/encryption settings here. Security should be enabled to assure maximum wireless security. WPA (Wireless Protected Access) provides dynamic key changes and constitutes the best security solution. In wireless environments, where not all devices support WPA, WEP (Wired Equivalent Privacy) should be used.
wle8='13个十六进制的成对数字'; //(13 hex digit pairs)
wle9='注意'; NOTE: 
wle10='若须使用字符串产生成对的十六进制数字，按左边的栏目并输入字符串'; // To automatically generate hex pairs using a PassPhrase, check the box on the left and input the passphrase here 
PP='字符串'; // PassPhrase 
generate='产生'; // generate 
errm='请输入字符串'; // Please enter a PassPhrase 
keym='密钥不完整'; // Key is not complete 
wle11='密钥1 '; // Key 1
wle12='密钥2'; // Key 2
wle13='密钥3'; // Key 3
wle14='密钥4'; // Key 4
wle15='十六进制的成对数字'; //(hex digit pairs)
wle16='WPA/WPA2(with Server)';
wle17='Advance Setting - Wireless Protected Access using a server to distribute keys to the clients: This option requires that a Radius server is running on the network.';
keym1='密钥生成后请点选“套用变更”使其有效'; // is not complete 
keym2='不完整, 请纠正!'; // is invalid, please correct it first!
wlm1='无线'; // Wireless 
wlm2='在这里您可以调整设定为无线区'; // In this tab you can adjust settings to the Wireless section of the Router.
wlm3='频道 与 SSID '; // Channel and SSID 
wlm4='调整无线频道和SSID（无线网络名称）'; // Make adjustments to the wireless channel and SSID(wireless network name)
wlm5='安全'; // Security 
wlm6='更改无线安全设定，例如WPA设定或WEP设定'; // Change the wireless security settings such as WPA settings or WEP settings.
wlm7='用作AP无线接入点'; // USE as Access Point 
wlm8='设定路由器的运作模式为AP模式'; // Set the operating mode of the Router to AP mode 
wlm9='指定IP地址'; //Specify IP address
wlm10='指定AP的IP地址'; // Specify IP address of the AP.
wlm11='MAC地址控制'; // MAC Address Control 
wlm12='设定一个您想要允许或是拒绝的无线网络用户清单'; // Set up a list of clients that you want to allow or deny access to the wireless network.
wlm13='无线网桥'; // Wireless Bridge 
wlm14='让您设定无线桥接WDS模式'; // Allows you to Setup WDS bridging modes.
ww8='请输入radius连接端口号码'; // Please input radius port number 
ww9='Radius连接端口号码应为一个界于1至65535的号码'; // Radius port number should be a number between 1 and 65535
ww10='请输入radius密钥'; // Please input radius key 
ww11='重新输入间隔应为一个号码'; // re-key interval should be a number 
ww12='重新输入间隔应为大于60秒'; // re-key interval should be larger than 60 seconds 
ww13='Authentication '; // Authentication 
ww1=' WPA （有服务器）'; // WPA (with server) 
ww2='进阶设定 - 无线保全存取使用服务器来分配密钥给用户：这个选项需要Radius服务器在网络上运作'; // Advanced Setting - Wireless Protected Access using a server to distribute keys to the clients: This option requires that a Radius server is running on the network.
ww3='加密技术'; // Encryption Technique 
ww4='Radius服务器'; // Radius Server 
ww5=' Radius连接端口'; // Radius Port 
ww6=' Radius密钥'; // Radius Key 
ww7='重新输入间隔时间'; // Re-Key Interval 
seconds='秒数'; // seconds 
wwp6='输入PSK'; // Input pre-shared key (PSK)
wwp7=' PSK的长度应为8到63或64的十六进制数'; // The length of pre-shared key should be 8 to 63 or 64 Hex 
wwp1='预设值为TKIP'; // Default is TKIP 
wwp2='PSK'; // Pre-shared Key (PSK)
wwp3='WPA-PSK(无服务器)'; // WPA-PSK (no server)
wwp4='此为一密码，以单字、词组、一串字母或是数字所组成。这个密码必须介于<b>8</b>和<b>63</b>个字母，其中可以包括空白或是标点符号。每一个连接到此网络的使用者必须要使用同一个密码'; // Wireless Protected Access with a Pre-Shared Key: The key is a password, in the form of a word, phrase or series of letters and numbers. The key must be between <b>8</b> and <b>63</b> characters long and can include spaces and symbols, or <b>64</b> Hex(0-F) only. Each client that connects to the network must use the same key (Pre-Shared Key). 
wwp5='模糊 PSK '; // Obscure PSK 
wlb1='无线 > 无线网桥'; // Wireless > Wireless bridge 
wlb2='无线桥接或无线分布系统WDS是用来连接无线路由器与无线AP，可使无线网络覆盖范围扩大'; // Wireless Bridging or Wireless Distribution System (WDS) is used to connect Wireless Routers and Access points together to extend a network.
wlb3='开启无线桥接'; // Enable Wireless Bridging.
wlb4='(开启此功能会让其它的Access Point可以连接到这个Access Point)'; //(enabling this feature allows other Access Points to connect to this Access Point.)
wlb5='默认值为启用'; // Default is enabled 
wlb6='仅启用允许特定Access Point来连接'; //Enable ONLY specific Access Points to connect.
wlb7="(输入AP的MAC地址来连接，如果这个项目没有被确认，则任何AP都可以连接。注意: 当连接到AP，至少一个AP需要呼叫其它AP的MAC地址。 提示:MAC地址可以透过无线网卡的网站寻找功能找到)"; //(Enter Wireless MAC Address of AP to connect to. If this Item is not checked, any AP can connect. Note: when connecting APs, at least one needs to call out the MAC address of the other. Hint: the MAC Address can be found using a site survey on a wireless client card.)
wlb8='关闭用户无线连接功能'; // Disable ability for Wireless CLIENTS to connect.
wlb9='此功能只能在AP用来单独连接其它AP时'; //(This feature should only be used when the AP is used  exclusively to connect wirelessly to other APs.)
wlb10='无效'; // invalid 
wlbss1='站点搜寻'; // Site Survey 
BSSID='BSSID';
wlbss2='网络类型'; // Network Type 
wlbss3='加密'; // Encryption 
wlbss4='选择'; // Select 
wlbss5='没有找到可用的BSSID'; // No available BSSID found.
wlbss6='所有四个区域都满了，请移除其中一个您才可以做新的选择!'; // All 4 fields are full, remove one of them before you select new one!';
wlq1='QoS（服务质量）配置';// QoS (Quality of Service) Configuration
wlq2='QoS 将网络中的重要数据（如多媒体内容和基于 IP 的语音（VoIP））列为最高优先级，因此这些数据不会受到正在通过网络发送的其他数据的干扰。基于 802.11e，您可以打开或关闭此功能，并可选择要使用的应答模式。如果您想在网络中传递多媒体内容或使用 VoIP，则应启用 QoS。<br>'; //QoS prioritizes important data on your network such as multimedia content and voice-over-IP (VoIP) so it will not be interfered with by other data being sent over the network. Based on 802.11e, this feature can be turned on or off and you can choose the acknowledgement mode you want to use. If you plan to stream multimedia content or use VoIP on your network, the QoS feature should be enabled.
wlq3=' QoS 切换'; // QoS Switch
wlq4='您可以打开或关闭 QoS <br>'; //Allows you to turn ON or OFF QoS. 
wlac1='ACK 模式'; // ACK Mode
wlac2='您可在网络中使用两种应答（ACK）模式来获取最佳的多媒体性能：迸发 ACK 和即时 ACK<br><br>'+
'即时 ACK 是缺省（出厂）设置，建议将其用于正常网络操作。将 ACK 模式从即时 ACK 更改为迸发 ACK 可能会影响长距离的吞吐量。当网络的长距离性能对您来说是最重要的时候，请使用即时 ACK。<br><br>'+
'迸发 ACK 模式不会对网络中所发送的每个信包都做出应答，因而会降低开销。当路由器和客户机之间的链接非常良好时，迸发 ACK 可以大大增加吞吐量。如果某个应用程序（如流型多高数据音频流）需要最大的带宽，请使用迸发 ACK 模式。请记住，当使用迸发 ACK 模式时可能会影响长距离性能。<br>'; //
wmac1='设置 MAC 地址控制'; // Setting MAC Address Control
wmac2=' MAC 地址过滤器是一个强大的安全性功能，允许您指定无线网络中使用的计算机。注：此列表仅适用于无线计算机。您可以对此列表进行配置，这样任何未在过滤器列表中指定的计算机在试图访问无线网络时都会被拒绝。当您启用此功能时，您必须输入允许访问网络的每台客户机（计算机）的 MAC 地址。“阻止”功能可让您非常容易地为任何计算机开启和关闭网络访问，而不必在列表中添加或清除计算机的 MAC 地址。<br>'+
'设置允许访问列表<br>'+
'1.		选择“允许”无线按钮 (1) 开始设置允许连接到无线网络的计算机的列表。<br>'+
'2. 	接着，在空白的“MAC 地址”字段中 (3)，输入希望能访问无线网络的无线计算机的 MAC 地址，然后单击“添加”(4)。<br>'+
'3. 	继续执行此操作，直到已输入了所有想要添加的计算机为止。<br>'+
'4. 	单击“套用变更”(5) 完成操作。<br><br>'+
'设置拒绝访问列表<br>'+
'“拒绝访问”列表可让您指定不希望访问网络的计算机。任何位于此列表中的计算机都不允许访问无线网络。其他则可以。<br>'+
'1.		选择"拒绝"无线按钮(2)开始设置拒绝访问无线网络的计算机列表<br>'+
'2. 	接着，在空白的“MAC 地址”字段中，输入您不允许访问无线网络的无线计算机的 MAC 地址，然后单击“添加”(4)。<br>'+
'3. 	继续执行此操作，直到已输入了所有想要拒绝访问的计算机为止。<br>'+
'4. 	单击“套用变更”(5) 完成操作。<br>'; //

wlmc1='无线 > MAC地址控制'; // Wireless > MAC address control 
wlmc2=' MAC地址控制 是设定一份您允许或拒绝存取无线网络的用户清单'; // Mac Address Control is the ability to set up a list of clients that you want to allow or deny access to the wireless network.
Allow='准许';	Deny='拒绝';   //Disable='使无效';
wlmc7='请先选择您要允许或拒绝网络存取的MAC地址清单'; // Select you want to allow or deny access the MAC address list first!
wlmc6='无法输入超过16个MAC地址'; // Can\'t enter more than 16 MAC addresses!
wlmc3="不正确的MAC地址"; //Invalid MAC address
wlmc4='请先更正'; // Please correct it first!
wlmc5='正确的MAC地址应为 xx:xx:xx:xx:xx:xx而x是介于0-9与a-f'; // The correct MAC address should be xx:xx:xx:xx:xx:xx and x is between 0-9 and a-f!
ENTRY_FULL	= '所有的输入记录已满，请清除部份输入记录并再试一次'; // All entries are full.\nPlease remove some entries then try again.
CLEAR_CONFIRM	= '您要清除输入记录吗? '; // Do you want to clear entry 
CLEAR_ALL_CONFIRM = '确认全部清除  您要清除所有输入记录吗？'; // Do you want to clear all entries?
ERR_INTERNAL	= '内部错误，请确认Javascrip功能 --'; // Internal Error: Please check the javascrip function -- 
g1=' IP地址是路由器的内部IP地址。存取进阶设定接口，'+ 
'只要输入新的地址然后选取"套用更改"，'+ 
'请在您的浏览器地址栏位中输入此IP地址'+  
' 如果有需要您可以更改这个地址， ';
// The "IP address" is the Internal IP address of the Router. To access the advanced setup 
// interface, type this IP address into the address bar of your browser. This address can 
//be changed if needed. To Change the IP address, type in the new IP address and click "Apply
// Changes". The IP address you choose should be a non-routable IP. Examples of a non-routable
// IP are:
g2=' 192.168.x.x (x必须介于0跟255) <br>'; //192.168.x.x (where x is anything between 0 and 255.)<br>
g3='10.x.x.x (x必须介于0跟255)<br>'; //10.x.x.x (where x is anything between 0 and 255.)<br>
g4='172.y.x.x(y必须介于16到31，而x必须介于0跟255)'; //172.y.x.x (where y is anything from 16 to 31, and x is anything between 0 and 255.)<br>
g5='无需改变子网掩码。如果需要的话可以更改子网掩码。仅在您有特殊理由时才更改子网掩码<br>'; // There is no need to change the subnet '+
'mask. It is possible to change the subnet mask if necessary. Only make changes to the Subnet '+'Mask if you specifically have a reason to do so.<br>'
g6=	' DNS是网络名称系统服务器的缩写。一个DNS服务器是一个位于URL地址的服务器，例如:www.belkin.com。在您开始使用一个路由器前，许多ISP并不会要求您输入这项信息。当您的ISP不提供您一个特定的 DNS地址时，您应该要选取"自动由ISP获取"。如果您是使用静态IP连接，您需要输入一个特定的DNS地址，及一个次级的DNS地址。如果您的连接类型是动态IP或PPPoE，您很有可能不一定需要输入一个DNS地址。输入DNS地址设定，"自动从ISP获取并输入DNS，按套用更改来储存设定。<br>'; // DNS is an acronym for Domain Name Server. A Domain Name Server is a server located on the '+ 
	//'Internet that translates URL\'s (Universal Resource Links) like www.belkin.com to IP '+
	//'addresses. Many ISP\'s do not require you to enter this information into the Router. The '+ 
	//'"Automatic from ISP" checkbox should be checked if your ISP did not give you a specific '+
	//'DNS address. If you are using a Static IP connection type, then you may need to enter a '+
	//'specific DNS address and secondary DNS address for your connection to work properly. If '+
	//'your connection type is Dynamic or PPPoE, it is likely that you do not have to enter a DNS '+ 
	//'address. To enter the DNS address settings, uncheck the "Automatic from ISP" checkbox and '+
	//'enter your DNS entries in the spaces provided. Click "Apply Changes" to save //the settings. <br>'
g7=	'DHCP服务器可以让设定网络非常简易，您只要替网络中的每一个计算机指派一个IP地址。如果有需要您可以关闭DHCP服务器。您需要替网络中的每一台计算机手动设定一个静态IP地址来关闭DHCP服务器。IP地址的范围应该，数值应介于2-100(99台计算机)，如果您要更改这个数字，您可以输入一组新的开始与结束数字，然后选取"应用更改值"<br>';
//The DHCP server function makes setting up a network very easy by assigning IP addresses '+ 
	//'to each computer on the network. The DHCP Server can be turned off if necessary. Turning '+
	//'off the DHCP server will require you to manually set a Static IP address in each computer '+
	//'on your network. The IP pool is the range of IP addresses set aside for dynamic assignment '+
	//'to the computers on your network. The default is 2-100 (99 computers) if you want to change '+
	//'this number, you can by entering a new starting and ending IP address and clicking on "Apply Changes". <br>';
g8=	'您可以为您的网络命名名称。您不必改变名称除非必须。您可以给您的网络起任何名称比如：我的网络。<br>';  // You can set a local domain name (network name) for your network. There is no need to change 
	//'this setting unless you have a specific advanced need to do so. You can name the network '+
	//'anything you want such as "MY NETWORK". <br>';
g9='动态IP '; // Dynamic IP 
g10= '动态IP是最多电缆调制解调器使用的连接类型。通常只要连接至ISP就可以将设定改为动态IP。有些动态IP连接可能会要求一个主机名称，如果您有一个指定的主机名称，将其输入即可。您的主机名称也是由您的ISP指定的，某些动态IP连接可能会要求您复制原本连接电脑的MAC地址。选取屏幕中的"更改广域网MAC地址"连接，如果您的路由器已正确连接，网络状态显示会是"连接中"<br>'; // A dynamic connection type is the most common connection type found with cable modems.
	//'Setting the connection type to dynamic in many cases is enough to complete the connection '+ 
	//'to your ISP. Some dynamic connection types may require a Host Name. You can enter your Host '+
	//'Name in the space provided if you were assigned one. Your Host Name is assigned by your ISP. '+
	//'Some dynamic connections may require that you clone the MAC address of the PC that was '+
	//'originally connected to the modem. To do so, click on the "Change WAN MAC address" link in '+
	//'the screen. The Internet Status indicator will read "Connected" if your Router is set up properly. <br>';
g11=	'一个静态IP连接类型较其它类型不普遍。如果您的ISP使用静态IP地址，您可能须要您的IP地址、子网掩码、与ISP网关。您的ISP会提供相关信息。输入您的资料然后选取"应用"，在您应用这些改变后，如果您的路由器已正确设定，您的网络状态会显示为"连接中"。如果您的ISP提供您超过一个静态IP地址，您的路由器应可处理五个静态IP地址，选取"我的ISP提供超过一个的IP地址"然后输入其它额外的IP地址<br>'; // A Static IP address connection type is less common than other connection types. If your ISP 
	//'uses static IP addressing, you will need your IP address, Subnet Mask, and ISP gateway '+
	//'address. This information is available from your ISP or on the paperwork that your ISP left '+ 
	//'with you. Type in your information then click "Apply Changes". After you apply the changes, '+
	//'the Internet Status indicator will read "Connected" if your Router is set up properly.<br><br>'+
	//'If your ISP assigns you more than one static IP address, your Router is capable of handling '+ 
	//'up to five static WAN IP addresses. Select "My ISP provides more than one static IP address" '+
	//'and enter your additional addresses. <br>';
g12=	'大部份的DSL ISP提供以太网络的点对点协议。如果您使用DSL调制解调器来连接网络，您的ISP可能会使用以太网络的PPPoE协议来让您登入网络。如果您的家用网络或小型办公室连接不需要Modem，在以下的状况您可以使用PPPoE: 1)您的ISP提供您一个使用者名称与密码来进行连接 2)您的ISP提供您网络连接的软件，例如"WinPOET、Enternet300 3)您必须确认选取桌面上的图标来进行连接  将路由器设定使用PPPoE，输入您的使用者名称与密码，如果您没有或您不知道，将该栏留空白即可。在您输入??? <br>';// Most DSL providers use PPPoE as the connection type. If you use a DSL modem to connect to '
	//'the Internet, your ISP may use PPPoE to log you into the service. If you have an Internet '+
	//'connection in your home or small office that doesn\'t require a modem, you may also use PPPoE. '+
	//'<br><br>'+
	//'Your connection type is PPPoE if:<br>'+ 
	//'1) Your ISP gave you a user name and password which is required to connect to the Internet<br>'+
	//'2) Your ISP gave you software such as WinPOET, Enternet300 that you use to connect to the Internet<br>'+
	//'3) You have to double-click on a desktop Icon other than your browser to get on the Internet<br><br>'+
	//'To set the Router to use PPPoE, type in your User Name and Password in the spaces provided. '+
	//'If you do not have a Service Name or do not know it, leave the Service Name field blank. '+
	//'After you have typed in your information, click "Apply Changes". After you apply the changes, '+ 
	//'the Internet Status indicator will read "Connected" if your Router is set up properly. '+
	//'For more details on configuring your Router to use PPPoE, see the user manual.<br>';
g13=	'有些ISP要求PPTP通讯协议。这将会使您可以直接设定一个ISP系统。输入ISP提供的信息，当您输入完毕，选取"套用变更"。在您应用更新值后，如果您的路由器已正确连接，网络状态显示为"连接中"';// Some ISPs require a connection using PPTP protocol. This sets up a direct connection to the ISP\'s system.
	//'Type in the information provided by your ISP in the space provided. When you have finished, '+
	//'click "Apply Changes". After you apply the changes, the Internet Status indicator will read '+
	//'"Connected" if your Router is set up properly. ';
g14=	'您的使用者名称与密码是由Telstra BigPond提供。请输入以下信息，选取您的状态且其会自动登入您的服务器IP地址，如果您的登入服务器地址跟提供的不同，您可能必需手动输入登入服务器IP地址，选取"套用变更"后，如果您的路由器已正确连接，网络状态显示会"联机中"'; // Your user name and password are provided to you by Telstra BigPond. Enter this information below. 
	//'Choosing your state will automatically fill in your Login Server IP address. '+
	//'If your Login Server address is different than one provided here, '+
	//'you may manually enter the Login Server IP address. '+
	//'When you have entered your information, click "Apply Changes". '+ 
	//'After you apply the changes, the Internet Status indicator will read "Connected" '+
	//'if your Router is set up properly. ';
g15='MTU设定'; // MTU Setting 
g16=	'MTU设定值不会改变除非您的ISP提供您一个特定的MTU值。更改MTU值可以让您解决以下问题: 从网络断线、连接速度慢、网络应用问题';
 // The MTU setting should never be changed unless your ISP gives you a specific MTU setting.
	//'Making changes to the MTU setting can cause problems with your Internet connection including '+ 
	//'disconnection from the Internet, slow Internet access and problems with Internet applications working properly. '; 

g17='在X之后断线…'; // Disconnect after X...
g18=	'断线功能仅供在路由器从ISP自动断线时使用，当一段时间无连线时。例如:当您使用的网络是以秒计费时，您可以使用此选项'; // The Disconnect feature is used to automatically disconnect the router from your ISP when 
	//'there is no activity for a specified period of time. For instance, placing a checkmark '+
	//'next to this option and entering 5 into the minute field will cause the router to '+
	//'disconnect from the Internet after 5 minutes of no Internet activity. This option should '+ 
	//'be used if you pay for your Internet service by the minute. ';
g19='MAC意指媒体存取控制地址。所有的网络零组件，包括网卡、集线器以及路由器都有独有的"序号"叫做媒体存取控制地址。您的ISP可能会记录所有您的电脑的媒体存取控制地址，并且仅让特定的电脑来使用网络服务。当您安装路由器，路由器本身的MAC地址会被ISP察觉并造成网络无法作业。贝尔金已提供路由器计算机的MAC地址。如果您无法确定您的ISP是否需要检查原本的MAC地址，只要复制MAC地址，并确保您所使用的电脑所连接的是在您安装路由器前所使用的调制解调器。选取"复制MAC地址"再选取"套用变更，您的MAC地址即已被路由器???'; // MAC is an acronym for Media Access Controller. All network components including cards, 
//'adapters, and routers, have a unique "serial number" called a MAC address. Your ISP may '+
//'record the MAC address of your computer\'s adapter and only let that particular computer '+ 
//'connect to the Internet service. When you install the router, the Router\'s own MAC address '+ 
//'will be "seen" by the ISP and may cause the connection not to work. Belkin has provided '+ 
//'the ability to clone (copy) the MAC address of the computer into the router. This MAC '+ 
//'address, in turn, will be seen by the ISP\'s system as the original MAC address and will '+ 
//'allow the connection to work. If you are not sure if your ISP needs to see the original '+ 
//'MAC address, simply clone the MAC address of the computer that was originally connected '+ 
//'to the modem. Cloning the address will not cause any problems with your network. <br> '+
//'To Clone your MAC address, make sure that you are using the computer which was ORIGINALLY '+
//'CONNECTED to your modem before the Router was installed. Click the "Clone MAC address" '+ 
//'button. Click "Apply Changes". Your MAC address is now cloned to the router. ';
g20='欲更改路由器的运作频道，从选单下选取取频道，选取"套用变更"并储存设定。您可以更改SSID。SSID是同等于无线网络名称。如果您所在的区域有其它的无线网络，您应该为其命名。默认值为belkin54g。欲更改SSID，选取SSID栏位并输入一个新的名称。选取"套用变更"使新的设定值生效';  // To change the channel of operation of the Router, select the desired channel from the drop-down menu and select your channel. Click "Apply Changes" to save the setting. You 
 //'can also change the SSID. The SSID is the equivalent to the wireless network\'s name. You can make the SSID anything you want to. If there are other wireless networks in your '+
 //'area, you should give your wireless network a unique name. The default is Belkin_Pre-N_xxxxxx. To '+ 
//'change the SSID, click inside of the SSID box and type in a new name. Click "Apply Changes" to make the change.'; 
g21='可以将您的无线网络设定为隐形。只要关闭SSID广播。您的网络就不会出现在站点扫描单中。Site Survey是一个许多无线网卡都有的特性，他可以扫描空气中所有可使用的网络并让电脑可从中选择。将SSID的广播关闭可以提高安全性。'; // It is possible to make your wireless network nearly invisible. By turning off the broadcast 
//'of the SSID, your network will not appear in a site survey. Site Survey is a feature of '+
//'many wireless network adapters on the market today. It will scan the "air" for any available'+
//' network and allow the computer to select the network from the site survey. Turning off the '+
//'broadcast of the SSID will help increase security.';
g22='当您欲将路由器当做AP时，您必须为其指定一个IP地址，此IP地址需落在您所连接的网络范围内。欲进入路由器进阶设定之接口，在网络浏览器输入IP地址并登录'; // When using the Router as an Access Point, you must specify an IP address for the Access 
//' Point. This IP address must fall into the same range as the network that you will be'+
//' connecting it to. To access the advanced setup interface of the Router again, type in'+
//' the IP address in the web browser and login.';
g23='使用无线模式切换'; // Using the Wireless Mode Switch 
g24= '使用此切换您可以设置路由器的三种无线模式。<br>'+
'1) 802.11g only<br>'+
'若将路由器设置为此模式，则只能使用符合 Pre-N 和 802.11g 的设备连接网络，排除速度较慢的 802.11b 设备。<br> '+
'2) 802.11g 和 802.11b<br>'+
'若将路由器设置为此模式，则使用符合 Pre-N、802.11g 和 802.11b 的设备连接网络。<br>'+
'3)关闭'+
'此模式将关闭路由器的访问点，因此没有无线设备可以连接网络。当您离家很长时间或不需要使用路由器的无线功能时，关闭路由器的无线功能是保护网络的极佳方法。';
// This switch allows you to set the Router's wireless modes. There are three modes.
// 1) 802.11g only<br>'+ Setting the Router to this mode will allow only Pre-N and 802.11g-compliant devices to join the network, keeping out any slower 802.11b devices.<br> '+
//2) 802.11g & 802.11b<br>'+
//Setting the Router to this mode will let Pre-N-, 802.11g-, and 802.11b-compliant devices to join the network. <br>'+
//3) Off<br>'+
//'This mode will turn OFF the Router\'s access point, so no wireless devices can join the network. Turning off the wireless function of your Router is a great way to secure your network when you are away from home for a long period of time, or don\'t want to use the wireless feature of the Router at a certain time. ';

g25='虚拟服务器'; // Virtual Servers 
g26=	'此功能提供您路由至网络外部的服务，例如:网络服务器(连接端口80)，FTP服务器(连接端口21)，或其它透过您的路由器所能够提供的服务。您的内部计算机被防火墙保护，所以在网络上并不会被"看见"。如果为了特定的应用程序，您需要使用虚拟服务器设置，一般应用程序的清单将会被提供给您。如果您所需要的应用程序不在清单上，您必须联络您的应用程序提供商，了解您需要哪一种程序。若您要从提供的清单中选择，从您所需要的应用程序那一行，然后选取"进入"。您的设定将会改变为您所指定的那一行。之后选取"套用变更"来储存您更改的设定。若??? '; // This function will allow you to route external (Internet) calls for services such as 
	//'a web server (port 80), FTP server (Port 21), or other applications through your Router '+ 
	//'to your internal network. Since your internal computers are protected by a firewall, '+
	//'machines from the Internet cannot get to them because they cannot be \'seen\'. If you need '+ 
	//'to configure the Virtual Server function for a specific application, a list of common '+
	//'applications has been provided. If your application is not listed, you will need to contact '+ 
	//'the application vendor to find out which port settings you need. To select from the provided '+
	//'list, select your application from the drop-down list. Select the row that you want to copy '+
	//'the settings to from the drop-down list next to "to row", then click "Enter". The settings '+
	//'will be transferred to the row you specified. Click "Apply Changes" to save the setting for '+
	//'that application. To manually enter settings, enter the IP address in the space provided for '+
	//'the internal (server) machine, the port(s) required to pass (use a comma between multiple '+
	//'ports), select the port type (TCP or UDP) and click "Apply Changes". You can only pass one '+
	//'port per internal IP address. Opening ports in your firewall can pose a security risk. You '+
	//'can enable and disable settings very quickly. It is recommended that you disable the settings '+
	//'when you are not using a specific application. ';
g27='用户IP防火墙'; // Client IP filters 
g28=	'路由器可以设定在某些特定日期或特定时间无法连接到网络、电子邮件、或其它网络服务。这项设定可在一台电脑、一系列的电脑或是很多电脑。例如:您要限制某一台特定的电脑，输入其IP地址与您欲限制的IP范围。接下来在端口栏位输入80，然后选择TCP，接下来选择Block。您也可以选择永远阻挡，在上方选择开始日期与时间，然后在下方选择结束日期与时间。选择"套用变更"后，这台电脑在您所指定的时间就无法连接到你所指定的限制IP。注意:请确认您选择了正确的时区'; // The Router can be configured to restrict access to the Internet, e-mail or other network 
	//'services at specific days and times. Restriction can be set for a single computer, a '+
	//'range of computers, or multiple computers. To restrict Internet access to a single '+
	//'computer for example, enter the IP address of the computer you wish to restrict access '+ 
	//'to in the IP fields. Next enter 80 and 80 in the Port fields. Select TCP. Select Block. '+
	//'You can also select Always to block access all of the time. Select the day to start on '+
	//'top, the time to start on top, the day to end on the bottom and the time to stop on the '+
	//'bottom. Click "Apply Changes". The computer at the IP address you specified will now be '+
	//'blocked from Internet access at the times you specified. Note: be sure you have selected '+
	//'the correct time zone under Utilities> System Settings> Time Zone. ';
g29=' MAC地址过滤'; // MAC Address Filtering 
g30=	'媒体存取控制地址防火墙能够让您设定哪些电脑被允许连接。任何不被允许的电脑都将无法存取信息。当您启用这项功能，您必须在您网络中的每一台电脑都输入MAC地址，"Block"功能能让您简单地开启或关闭网络存取功能，无需从清单上增加或移除MAC地址。欲使用这项功能，选取"开启媒体存取控制地址防火墙"，接下来在每一台计算机输入媒体存取控制防火墙地址，您只要选取"增加"，然后在空白字段中输入媒体存取控制防火墙，然后选择"套用变更"即可。若要从清单上删除媒体存取控制地址，只要在您欲删除的媒体存取控制地址旁边按"删除"即可，??? '; // The MAC Address Filter is a powerful security feature that allows you to specify which 
	//'computers are allowed on the network. Any computer attempting to access the network that '+
	//'is not specified in the filter list will be denied access. When you enable this feature, '+
	//'you must enter the MAC address of each client on your network to allow network access to '+
	//'each. The "Block" feature lets you turn on and off access to the network easily for any '+
	//'computer without having to add and remove the computer\'s MAC address from the list. To '+
	//'enable this feature, select "Enable MAC Address Filtering". Next, enter the MAC address '+
	//'of each computer on your network by clicking "Add" and entering the MAC address in the '+
	//'space provided. Click "Apply Changes" to save the settings. To delete a MAC address from '+
	//'the list, simply click "Delete" next to the MAC address you wish to delete. Click "Apply '+
	//'Changes" to save the settings. <br><br>'+
	//'Note: you will not be able to delete the MAC address of the computer you are using to '+ 
	//'access the Router\'s administrative functions. (The computer you are using now). ';
g31=	'非军事区功能能让您指定特定任一在您区域中的电脑被网络地址防火墙取代。如果网络地址发生问题，这项功能是必需的，由其当您使用电脑游戏或是视讯会议时。若临时状况发生请使用此项功能。<font class="redBold">这台在非军事区的电脑并未受到黑客攻击的保护</font>，将计算机放至非军事区，输入最后一个IP地址的数字，然后选取"启用"，要让更改生效请选取"套用变更"。若您要使用多个广域网IP地址，请选取非军事区主机能够直接联机的广域网IP地址，输入非军事区主机电脑IP地址的最后两码，选择"启用"然后选取"套用变更"'; // The DMZ feature allows you to specify one computer on your network to be placed 
	//'outside of the NAT firewall. This may be necessary if the NAT feature is causing '+
	//'problems with an application such as a game or video conferencing application. '+
	//'Use this feature on a temporary basis. '+
	//'<font class="redBold">'+
	//'The computer in the DMZ is not protected from hacker attacks.</font> '+ 
	//'To put a computer in the DMZ, enter the last digits of its IP address in the '+ 
	//'IP field and select "Enable". Click "Apply Changes" for the change to take effect. '+ 
	//'If you are using multiple static WAN IP addresses, it is possible to select which '+
	//'WAN IP address the DMZ host will be directed to. Type in the WAN IP address you '+
	//'wish the DMZ host to direct to, enter the last two digits of the IP address of '+
	//'the DMZ host computer, select "Enable" and Click "Apply Changes". ';
g32='阻挡ICMP Ping '; // Block ICMP Ping 
g33=	'电脑黑客通常会使用"Pinging"来寻找其欲攻击的目标。透过侦测一个特定的IP地址并收到回应，电脑黑客可判断出是否有利益的信息可以截取。本路由器可以设定不给予外来的ICMP侦测回应，如此一来便可以提高您的计算机安全层级。要关闭电脑对Ping的回应，请选取"阻挡ICMP Ping"然后选取"套用变更"。'; // Computer hackers use what is known as "Pinging" to find potential victims on the 
	//'Internet. By pinging a specific IP address and receiving a response from the IP '+
	//'address, a hacker can determine that something of interest might be there. The '+
	//'Router can be set up so it will not respond to an ICMP Ping from the outside. This '+ 
	//'heightens the level of security of your Router. To turn off the ping response, select '+ 
	//'"Block ICMP Ping" and click "Apply Changes". The router will not respond to an ICMP ping. '; 
g34='管理员密码'; // Administrator Password 
g35='本路由器并未设定任何密码。若您要提高安全层级，你可以现在设定。请妥善保管您的密码，未来您将需要此密码来使用此路由器。若您要使用远程管理功能，我们建议您最好设定密码。退出时间能让您设定您能够使用路由器进阶设定的时间长度。当您开始闲置时，定时器会开始记时。例如:您已经在进阶设定中做了更改，未点选"退出"就离开电脑，假设您设定退出时间为十分钟，则在您离开电脑十分钟之后，系统就会自动将您退出。这项功能是为了提高安全性，系统预设的退出时间为十分钟。注意:在同一时间内只有一台电脑可以登录至进阶设定的接口。'; // The Router ships with NO password entered. If you wish to add a password for more 
//'security, you can set a password here. Keep your password in a safe place, as you '+
//'will need this password if you need to log into the router in the future. It is '+
//'also recommended that you set a password if you plan to use the Remote management '+
//'feature of this Router. <br><br>'+
//'The login timeout option allows you to set the period of time that you can be logged '+ 
//'into the Router\'s advanced setup interface. The timer starts when there has been no '+
//'activity. For example, you have made some changes in the advanced setup interface, '+
//'then left your computer alone without clicking "Logout". Assuming the timeout is set '+
//'to 10 minutes, then 10 minutes after you leave, the login session will expire. You '+
//'will have to login to the router again to make any more changes. The login timeout '+
//'option is for security purposes and the default is set to 10 minutes. As a note, only '+
//'one computer can be logged into the Router\'s advanced setup interface at one time. ';
g36='时间与时区'; // Time and Time Zone 
g37=	'这台路由器的时间透过简易网络时间通讯协议设定。如此可让路由器与全球网络时间同步。路由器中的同步时钟是用来记录与控制使用者登入。请选择你所居住地的时区。若您住在夏时制地区，则选择"启用夏时制"。系统可能不会马上更新，请等候至少15分钟让路由器联络时区服务器并得到回应，您无法自行设定时间。 '; // The Router keeps time by connecting to a Simple Network Time Protocol (SNTP) server.
	//'This allows the Router to synchronize the system clock to the global Internet. The '+ 
	//'synchronized clock in the Router is used to record the security log and control client '+  
	//'filtering. Select the time zone that you reside in. If you reside in an area that '+ 
	//'observes Daylight Saving, then place a checkmark in the box next to "Enable Daylight '+ 
	//'Saving". The system clock may not update immediately. Allow at least 15 minutes for '+ 
	//'the router to contact the time servers on the Internet and get a response. You cannot '+ 
	//'set the clock yourself. '; 
g38='远程管理'; // Remote Management 
g39=	'在您启用此项功能前，<font class="plaintext_bold">请确认您已经设定管理员密码</font>。远程管理能让您从网络的任何地方做路由器的设定。总共有两种远程管理路由器的方式，第一种方式可以从任何地方存取路由器，只要选择任何可以远程管理路由器的IP地址。从网络上的任何地方输入您广域网的IP，您可以看到一个要求您输入路由器密码的窗口。第二种方式能够让指定的IP地址对路由器远程管理。这个方式比较安全，但是较为不便。若要使用这种方式，输入您将要存取的路由器之IP地址，然后选择"只有这个IP地址可对路由器远程操作"。在您开启此项功能前。我们强烈建议您设定一个管理者???';// Before you enable this function,
	//'<font class="plaintext_bold">MAKE SURE YOU HAVE SET THE ADMINISTRATOR PASSWORD. </font>'+ 
	//'Remote management allows you to make changes to your Router\'s settings from anywhere '+ 
	//'on the Internet. There are two methods of remotely managing the router. The first '+ 
	//'method is to allow access to the router from anywhere on the Internet by selecting '+ 
	//'"Any IP address can remotely manage the router". By typing in your WAN IP address '+ 
	//'from any computer on the Internet, you will be presented with a login screen where '+ 
	//'you need to type in the password of your router. The Second method is to allow a '+ 
	//'specific IP address only to remotely manage the router. This is more secure, but less '+  
	//'convenient. To use this method, enter the IP address you know you will be accessing '+ 
	//'the Router from in the space provided and select "Only this IP address can remotely '+ 
	//'manage the Router". Before you enable this function, it is STRONGLY RECOMMENDED that '+ 
	//'you set your administrator password. Leaving the password empty will potentially open '+ 
	//'your router to intrusion. ';
g40='启用NAT ';// NAT Enabling 
g41=	'在您启用此项功能前，<font class="plaintext_bold">请确认您已经设定管理者密码</font>。NAT可以让您与网络中的其它计算机分享ISP所提供的同一个IP地址。进阶使用者应该仅使用此项功能。当您的ISP提供您多个IP地址，或是您需要进行进阶系统配置而关闭NAT时，就需使用此项功能。如果您仅使用单一IP地址而您的NAT是关闭时，您的电脑将无法联机到因特网。其它的问题也有可能会发生，将NAT关闭也将会关闭您的防火墙功能';  // Before you enable this function, 
	//'<font class="plaintext_bold">MAKE SURE YOU HAVE SET THE ADMINISTRATOR PASSWORD. </font>'+ 
	//'Network Address Translation (NAT) is the method by which the router shares the single '+ 
	//'IP address assigned by your ISP with the computers on your network. Advanced users '+ 
	//'should only use this function. This function should only be used if your ISP assigns '+ 
	//'you multiple IP addresses or you need NAT disabled for an advanced system configuration. '+  
	//'If you have a single IP address and you turn NAT off, the computers on your network will '+ 
	//'not be able to access the Internet. Other problems may also occur. Turning off NAT will '+ 
	//'disable your firewall functions. '; 
g42=	'"全球随插即用"提供无疏漏的作业，涵盖了语音讯息、视讯讯息、游戏及其它全球随插即用的应用程序。某些应用程序需要路由器的防火墙透过特定的方式组态方能运作。通常会需要打开TCP与UDP的连接端口，有时还需要设定触发程序连接端口。全球随插即用可与路由器联机，它会告知路由器何处需要防火墙组态。此路由器的全球随插即用功能是关闭的。如果您欲使用此功能，只要在工具程序页面寻找"启用全球随插即用"然后选取"启用"，再选取"套用变更"即可'; // UPnP (Universal Plug-and-Play) is a technology that offers seamless operation of voice 
	//'messaging, video messaging, games, and other applications that are UPnP compliant. Some '+
	//'applications require the Router\'s firewall to be configured in a specific way to operate '+
	//'properly. This usually requires opening TCP and UDP ports and in some instances setting '+
	//'trigger ports. An application that is UPnP compliant has the ability to communicate with '+
	//'the Router, basically "telling" the Router which way it needs the firewall configured. '+
	//'The Router ships with the UPnP feature disabled. If you are using any applications that '+ 
	//'are UPnP compliant, and wish to take advantage of the UPnP features, you can enable the '+ 
	//'UPnP feature. Simply select "Enable" in the "UPnP Enabling" section of the Utilities page. '+ 
	//'Click "Apply Changes" to save the change. ';
g43='自动Firmware更新提醒'; // Automatic Firmware Update Notification 
g44='此路由器内建自动确认新版本的软体并提醒您是否有新轫体可供更新。当您登入路由器的进阶设定接口时，路由器会确认是否有新轫体可供更新。如果有，路由器会通知您。您可选择下载新的轫体或是忽略该提示。此项功能设定为关闭，如果您要启用，只要选取"启用"，然后选取"套用变更"即可 ';// The Router has the capability built-in to automatically check for a new version of 
//'firmware and alert you that the new firmware is available. When you log into the '+ 
//'Router advanced interface, the router will perform a check to see if new firmware '+ 
//'is available. If new firmware is available, you will be notified. You can choose to '+ 
//'download the new version or ignore it. The router ships with this feature disabled. '+  
//'If you want to enable it, select "Enable" and click "Apply Changes". ';
g45='无线安全'; // Wireless Security 
g46='使用加密功能可让您确保无线网络的安全层级。在同一时间内只能使用一种安全层级设定。所以使用者必须选择能够支持所有网络装置的模式。贝尔金产品共有五种安全层级设定可供您选择<br><br>' +
'1)关闭。没有启用的加密模式。所有网络上的使用者皆可连接网络并登录<br><br>' +
'2)WPA PSK - 家用(无服务器)。无线保全存取是一种让所有的信息包装都有不同的加密代码或是密钥。由于密钥持续改变，所以WPA是非常安全的。共有两种WPA，一种是WPA-PSK (Pre-Shared Key)，另一种是WPA-Radius Server。两者最显着的差别在于一个需要服务器一个不需要。WPA-PSK是提供没有服务器的家用或小型企业用户。PSK加密密钥是产生与一个字符串或语句。很明显地，最大的危机在于当有人找出您的Pass Phrase字符串或语句。<br><br>'+
'a. TKIP(暂时密钥完整性通讯协议)指AES(进阶加密标准) WPA设定需要使用者选择使用TKIP加密或AES加密。WPA标准指定TKIP，所以此为默认值。除此之外，TKIP应提供比卖主更佳的效能，因为有许多无线产品永远无法升级为AES。AES是一种基于802.11i的最新加密技术。新的WPA标准将可能使用AES，虽然目前来说AES尚未普及，但是有些使用者较喜爱使用此科技。不管使用哪一种标准，所有的网络产品都一定要用一样的技术标准<br><br>'+
'b. Pre-Shared Key 输入一个超过40个字符的单字或词组，同样，PSK一定要可以使用在每一个网络中的无线设备。请注意上方和下方栏位的不同(大写N跟小写n是不一样的)。最简单破获您网络安全的方式就是猜出您的PSK码<br><br>'+
'3) 128-bit WEP  直到最近，128-bit WEP(Wired Equivalent Privacy)是无线加密的标准。如果不是您所有的无线设备支持WPA，128bitWEP仍可以提供极佳的安全选择。系统会要求您输入一个十六进制的数字，或您可以让其自行产生<br><br>'+
'4) 64-bit WEP 贝尔金建议使用64-bit WEP模式，如果网络中有些设备不支持WPA或128-bit WEP<br><br>'+
'5) WPA - Radius服务器(此模式可透过进阶按钮存取)。WPA服务器只能供网络当做一个Radius服务器来使用。所有的参数在此模式中都可以从Radius服务器的管理员获得。不像是WPA PSK，WPA服务器会提供服务器一个密钥而非让系统自行产生<br><br>';
// Using Encryption can help secure your wireless network. Only one type of security 
//'may be selected at a time. Therefore the customer must select a mode that is '+ 
//'supported on all network devices on the wireless network. This Belkin product has 5 '+ 
//+'possible Security settings:<br><br>'+
//'1) Disabled. No encryption is enabled in this mode. Open networks where all users are '+ 
//'             welcome sometimes prefer to not enable encryption.<br><br> '+ 
//'2) WPA PSK - Home (no server). WPA (Wireless protected Access) PSK is a recent '+ 
//'             standards-based security technique where each packet of information is '+ 
//'             encrypted with a different code, or key. Since the key is constantly changing, '+  
//'             WPA is very secure. There are two types of WPA, WPA-PSK (Pre-Shared Key), and '+ 
//'             WPA-Radius Server. Obviously the difference being that one requires a server '+  
//'             and one does not. WPA-PSK is for home and small business users who do not have '+  
//'             a server. The PSK encryption key is generated automatically from a string of '+  
//'             characters or Pass Phrase. Obviously the biggest security risk in WPA PSK is '+  
//'             if someone finds out your Pass Phrase.<br><br> '+ 
//'	a. TKIP verses AES. WPA setup requires the user to select whether to encrypt using '+  
//'	   TKIP or AES. The WPA standard specifies TKIP, so that is the default. Additionally '+  
//'	   TKIP should provide better compatibility between wireless products from different '+  
//'	   vendors since many wireless products will never be upgraded to AES. AES is a new '+  
//'	   encryption technique based on the un-ratified 802.11i standard. New WPA //standards '+  
//'	   are being considered using AES. Although AES is not as popular, some users may '+  
//'	   prefer to use this technique. Either way, all networks devices must use the same '+  
//'	   technique.<br><br> '+
//'	b. Pre-Shared Key. Enter any word or phrase up to 40 characters. The same PSK must '+  
//'	   also be used for every other wireless network device on the network. Watch out for '+  
//'	   upper and lower case differences ("n" is different than "N".) Remember, the easiest '+  
//'	   way to break your security is for someone to guess your PSK.<br><br> '+ 
//'3) 128-bit WEP. Until recently, 128-bit WEP (Wired Equivalent Privacy) was the standard for '+  
//'                wireless encryption. If not all of your wireless devices support WPA, 128bit '+  
//'                WEP still offers very good security option. It will require you to enter hex '+  
//'                numbers, or you can generate them automatically.<br><br> '+ 
//'4) 64-bit WEP. Belkin only recommends 64-bit mode on networks where some devices do not support '+  
//'               either WPA or 128bit WEP.<br><br> '+
//'5) WPA - Radius Server. (This mode is accessed from the Advanced Button). WPA'+
//'server is only  for networks using a Radius Server. All parameter for this mode'+
//'should be obtained from the administrator of your Radius Server. Unlike WPA PSK'+
//'WPA server passes the key from the server to the clients instead of generating it automatically.';
g57='使用动态 DNS'; //Using Dynamic DNS
g58='动态 DNS 服务允许您在许多域 DynDNS.org 产品中为动态 IP 地址指定静态主机名别名，从而更容易地从因特网上的不同区域访问您的网络计算机。DynDNS.org 为因特网社区免费提供此服务（最多五个主机名）。<br>'+
'动态 DNSSM 服务是家庭网站、文件服务器的理想选择，或使您在工作时更易访问您的家用 PC 和已存储的文件。使用此服务可确保您的主机名总是指向您的 IP 地址，而不管您的 ISP 多久对其更改了一次。当您的 IP 地址更改时，您的朋友和同事则可通过访问 yourname.dyndns.org 来找到您！<br>'+
'<br>要免费注册您的动态 DNS 主机名，请访问 http://www.dyndns.org。<br>'+
'<br><b>设置路由器的动态 DNS 更新客户机</b><br>'+
'在使用此功能前，您必须使用DynDNS.org 的免费更新服务进行注册。一旦注册，请按以下指示进行操作。<br>'+
'1. 	在“用户名”字段中 (1) 输入您的 DynDNS.org 用户名。<br>'+
'2. 	在“密码”字段中 (2) 输入您的 DynDNS.org 密码。<br>'+
'3. 	在“域名”字段中 (3) 输入您通过 DynDNS.org 设置的 DynDNS.org 域名。<br>'
'4. 	单击“更新动态 DNS”更新您的 IP 地址。<br>'+
'无论何时当由您的 ISP 指定的 IP 地址更改时，路由器都会使用您的新 IP 地址自动更新 DynDNS.org 的服务器。您还可以通过单击“更新动态 DNS”按钮 (4) 来手动完成此操作。<br>'; // 
fw1='固件更新进行中'; // Firmware update in progress.
fw2='切勿中断路由器运行或拔出路由器的插头，此类操作会导致路由器不能工作'; //DO NOT INTERRUPT OR UNPLUG THE ROUTER, doing so could render the Router inoperable
apply_text_1='更改设置,请稍等一会......<BR>\n '; // Applying changes. Please wait .......


//for print server main added by bin 02/04/2004
pm1='Print Service'
pm2='In this tab you can adjust settings to the Print Service section of the Print Server.'
pm3='Print Server Configuration'
pm4='Make adjustments to the Print Server Configuration.'
//for print server configuration added by bin 02/04/2004
pc1='Print Service > Print Server Configuration'
pc2='Print Server Name:'
pc3='Print Server Name >'
pc4='LPR Printing:'
pc5='This is always enabled. Belkin port uses LPR printing protocol.'
pc6='Raw TCP/IP Printing:'
pc7='Raw TCP/IP Printing protocol uses port 9100.'
pc8='Enable Raw TCP/IP Printing >'
pc9='FTP Printing:'
pc10='Print server accepts anonymous FTP to send file to printer'
pc11='Enable FTP Printing >'
pc12='No Printer connected'
pc13='Ready'
pc14='Out Of Paper'
pc15='Off Line'
pc16='Not Connected'
pc17='Printing'
pc18='Unknow Status'

parentalc_alert = 'Can not connect to outside'
parentalc_timeout = 'Timeout range: 1-60';
parentalc_alert_pwd = 'Password is incorrect'

g47='Printer Field';
g48='This line shows you the name of the printer that is connected to the router and the status of the printer.';
g49='Print Server Name';
g50='The print server name is used to identify the print server. The name can be changed to something more friendly if you prefer by typing in a new name such as "My Print Server" then clicking "Apply Changes"';
g51='LPR Printing (3)';
g52='The Belkin printer port uses LPR printing as the main method to print. ';
g53='Raw TCP/IP Printing';
g54='This feature allows clients to print to the Print Server using the standard TCP/IP printer port built into Windows XP and 2000 instead of the Belkin Port Monitor. Using Raw Printing requires the user to configure all port parameters manually and is not recommended for users unfamiliar with TCP/IP printing.';
g55='FTP Printing';
g56='This feature enables the printer to receive print jobs sent by FTP (see Using FTP Printing of the manual). Disabling this feature will prevent FTP jobs.';
h40=''; //<b>USB Print Server</b> The USB print server in this router allows networked computer to print to a single USB printer. To enable a computer to print to this printer, you must install the printer\'s drivers and software on the computer and also you must install the Belkin printer port. The Belkin printer port software is included with the Rout
}
