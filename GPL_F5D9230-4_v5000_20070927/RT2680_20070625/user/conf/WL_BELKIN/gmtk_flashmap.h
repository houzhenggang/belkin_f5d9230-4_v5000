

#ifndef __GMTK_FLASHMAP__
#define __GMTK_FLASHMAP__
#include "project.h"

#define		FLASHSZ									0x00400000				/*	4M		*/
#define		MEMORYSZ								0x01000000				/*	16M		*/

#define		MTDSIZE_BOOT						0x00050000				/*	256K	+ 64K */
#define		MTDSIZE_KERNEL					0x00140000				/*	1M		*/
#define		MTDSIZE_NVRAM						0x00010000				/*	64K		*/
#define		MTDSIZE_NVRAM_FACTORY		0x00010000				/*	64K		*/
#define		MTDSIZE_ROOTFS					FLASHSZ - MTDSIZE_BOOT - MTDSIZE_KERNEL - MTDSIZE_NVRAM - MTDSIZE_NVRAM_FACTORY

#define		MTDOFFSET_BOOT					0x00000000
#define		MTDOFFSET_KERNEL				MTDSIZE_BOOT
#define		MTDOFFSET_ROOTFS				MTDSIZE_BOOT + MTDSIZE_KERNEL
#define		MTDOFFSET_NVRAM					MTDSIZE_BOOT + MTDSIZE_KERNEL + MTDSIZE_ROOTFS
#define		MTDOFFSET_FACTORY				MTDSIZE_BOOT + MTDSIZE_KERNEL + MTDSIZE_ROOTFS + MTDSIZE_NVRAM

#define		PARTITION_1_NAME				"uBoot"
#define		PARTITION_1_SIZE				MTDSIZE_BOOT
#define		PARTITION_2_NAME				"Linux Kernel"
#define		PARTITION_2_SIZE				MTDSIZE_KERNEL
#define		PARTITION_3_NAME				"RootFS"
#define		PARTITION_3_SIZE				MTDSIZE_ROOTFS
#define		PARTITION_4_NAME				"NVRAM"
#define		PARTITION_4_SIZE				MTDSIZE_NVRAM
#define		PARTITION_5_NAME				"NVRAM_FACTORY"
#define		PARTITION_5_SIZE				MTDSIZE_NVRAM_FACTORY

#define		MTDPATH_NVRAM						"/dev/mtd/4"
#define		MTDPATH_FACTORY					"/dev/mtd/5"



#endif // __GMTK_FLASHMAP__
