# +++ Gamble, Gemtek
#CC	= gcc
#CC = mips-linux-gcc
# --- Gamble, Gemtek
COPTS	= -O2 -g
CFLAGS	= $(COPTS) -I.. -I../../include -fPIC
LDFLAGS	= -shared
INSTALL	= install -o root

SUBDIRS := rp-pppoe
# Uncomment the next line to include the radius authentication plugin
# SUBDIRS += radius
PLUGINS := minconn.so passprompt.so passwordfd.so

# include dependencies if present
ifeq (.depend,$(wildcard .depend))
include .depend
endif

all:	$(PLUGINS)
	for d in $(SUBDIRS); do $(MAKE) $(MFLAGS) -C $$d all; done

%.so: %.c
	$(CC) -o $@ $(LDFLAGS) $(CFLAGS) $^

VERSION = $(shell awk -F '"' '/VERSION/ { print $$2; }' ../patchlevel.h)
LIBDIR	= $(DESTDIR)/usr/lib/pppd/$(VERSION)

#install: $(PLUGINS)
#	$(INSTALL) -d $(LIBDIR)
#	$(INSTALL) $? $(LIBDIR)
#	for d in $(SUBDIRS); do $(MAKE) $(MFLAGS) -C $$d INSTALL=$(INSTALL) \
#				LIBDIR=$(LIBDIR) install; done

install:
	for d in $(SUBDIRS); do $(MAKE) -C $$d INSTALL=$(INSTALL) \
				LIBDIR=$(LIBDIR) install; done	

romfs:
	for i in $(SUBDIRS) ; do make -C $$i romfs || exit $? ; done

clean:
	rm -f *.o *.so *.a
	for d in $(SUBDIRS); do $(MAKE) $(MFLAGS) -C $$d clean; done

depend:
	$(CPP) -M $(CFLAGS) *.c >.depend
	for d in $(SUBDIRS); do $(MAKE) $(MFLAGS) -C $$d depend; done
