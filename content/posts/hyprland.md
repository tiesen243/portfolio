---
title: Hyprland
description: Setup Hyprland OS base on Arch Linux with easy steps.
image: /imgs/blog/hyprland.png
date: 2024-04-10
tags:
  - Linux
  - Hyprland
---

## Table of Contents

1. [Introduction](#introduction)
2. [Installation](#installation)
3. [Set up](#set-up)
4. [Key mapping](#key-mapping)
5. [Conclusion](#conclusion)

## Introduction

### What is Hyprland?

Hyprland is a Linux distribution based on Arch Linux. It is a rolling release distribution that is focused on simplicity and minimalism. It is designed to be lightweight and fast, with a clean and simple user interface. Hyprland is designed to be easy to install and use, with a focus on providing a stable and reliable operating system that is easy to maintain and update.

### Why Hyprland?

Hyprland is a great choice for users who want a simple and lightweight Linux distribution that is easy to install and use. It is designed to be fast and efficient, with a clean and simple user interface that is easy to navigate. Hyprland is a rolling release distribution, which means that it is constantly updated with the latest software and security updates. This makes it a great choice for users who want to stay up to date with the latest software and security updates.

Hyprland is also a great choice for users who want a stable and reliable operating system that is easy to maintain and update. It is designed to be easy to install and use, with a focus on providing a stable and reliable operating system that is easy to maintain and update. Hyprland is a great choice for users who want a simple and lightweight Linux distribution that is easy to install and use.

## Installation

### Requirements

- A usb drive with at least 8GB of storage
- A ISO image of Arch Linux [Download](https://archlinux.org/download/)
- A computer with a 64-bit processor
- A stable internet connection

### Installation steps

First, you need to download the Arch Linux ISO image from the Arch Linux website. You can download the ISO image from the Arch Linux website by clicking on the download link on the Arch Linux website.

Then, use `Rufus` to burn the ISO image to the USB drive. You can download Rufus from the Rufus website. Once you have downloaded Rufus, you need to open Rufus and select the Arch Linux ISO image that you downloaded. Then, you need to select the USB drive that you want to burn the ISO image to. Once you have selected the ISO image and the USB drive, you need to click on the start button to burn the ISO image to the USB drive.

> Intall Rufus [Download](https://rufus.ie/)

Second, plug the USB drive into the computer that you want to install Arch Linux on. Then, you need to boot the computer from the USB drive. You can do this by restarting the computer and pressing the boot menu key when the computer starts up. The boot menu key is usually F12, but it can vary depending on the computer. Once you have booted the computer from the USB drive, you need to select the Arch Linux installation option from the boot menu.

> Remember to disable `Secure Boot` in the BIOS settings

Now, started to install Arch Linux on your computer. You can follow the Arch Linux installation guide to install Arch Linux on your computer.

```bash
setfont ter-132n
```

Check the internet connection.

```bash
ping google.com
```

If the internet connection is not working, you can use the following command to connect to the internet.

```bash
iwctl

# List the available device
device list

# Scan the available network
station device_name scan
station device_name get-networks

# Connect to the network
station device_name connect SSID
# Enter the password

# Check the connection
station device_name show

# Exit the iwctl and check the connection
exit
ping google.com

# if the connection is working, you can continue the next step
```

Set up drive partitions to install Arch Linux.

```bash
# Show the available disk
lsblk

# Choose the drive has at least 50GB of storage
# Use cfdisk to create a new partition table on the drive
cfdisk /dev/[drive_name]
```

Create the partitions on the drive.

- Move the cursor to the free space and press `Enter`
- Select the `New` option and press `Enter`
- Set the size of the partition is `1G` and press `Enter`
- Select `type` to `EFI System` and press `Enter`
- Go to the free space again and select the `New` option and press `Enter`
- Set the size of the partition is at least `40GB` and press `Enter`
  > Note: this partition is used to home directory
- Select `write` and press `Enter` to write the changes to the disk then `quit` to exit the cfdisk

```bash
# Format the partitions
mkfs.fat -F32 /dev/[drive_name] # EFI partition 1G
mkfs.ext4 /dev/[drive_name] # Home partition >= 40G

# Mount the partitions to the system
mount --mkdir /dev/[drive_name] /mnt/archinstall # Home partition (>= 40G)
mount --mkdir /dev/[drive_name] /mnt/archinstall/boot # EFI partition (1G)
```

Run `archinstall` script to start the installation. In archinstall script, you can choose the following options:

- `Disk configuration`:
  - Choose `Pre-mounted configuration` to use the partitions that you have created
  - Enter the directory: `/mnt/archinstall`
- `Bootloader`: Choose `GRUB` as the bootloader
- `Hostname`: Enter the hostname for the computer
- `Root password`: Enter the root password
- `User`: Create your user account and remenber to set user as `superuser`
- `Profile`:
  - Choose `Desktop` as the profile and select `Hyprland` as the desktop environment
  - Choose `Graphics driver` and select GPU driver for your computer. In my case, I choose `Nvidia` driver
  - `Greeter`: Choose `SDDM` as the greeter or something you like
- Dont select `Audio` because I will install `Pulseaudio` later
- `Additional packages`:
  - Choose `Yes` to install additional packages
  - Enter the package name: `pulseaudio`, `grub`, `efibootmgr`, `os-prober`, `neovim`
  - Press enter to verify the package name
- `Network configuration`: Choose `Use NetworkManager` to manage the network connection
- `Timezone`: Choose the timezone for your location. In my case, I choose `Asia/Ho_Chi_Minh`
- Finally, choose `Install` to start the installation process

After that, configure the system to boot into Arch Linux.

```bash
bootctl remove

# Mount the EFI partitions of Windows 11
lsblk # Check the EFI partition
mkdir /mnt/win
mount /dev/[drive_name] /mnt/win # in my case, the EFI partition is /dev/nvme0n1p1

# Grub installation
grub-install --target=x86_64-efi --efi-directory=/boot --bootloader-id=arch
grub-mkconfig -o /boot/grub/grub.cfg
```

Then, config `grub` boot menu

```bash
nvim /etc/default/grub
```

Uncomment the following line

```bash title="/etc/default/grub"
GRUB_DISABLE_OS_PROBER=false
```

Update the grub resolution by find and update the following line

```bash title="/etc/default/grub"
GRUB_GFXMODE=1920x1080x32
```

Finally, reboot the computer and select the Arch Linux in the boot menu to start the system.

```bash
exit
reboot
```

After reboot, open the terminal by press `Win + Q`, and start to set up dual boot with Windows 11.

```bash
sudo grub-mkconfig -o /boot/grub/grub.cfg
# Enter the root password
```

Now, you can reboot the computer and can see the Windows 11 in the boot menu.

> Congratulation! You have successfully installed Arch Linux with Hyprland OS on your computer. Then, customize the system.

## Set up

Go to hypr config file to disable warning message.

```bash title="~/.config/hypr/hyprland.conf"
# autogenerated = 1 # remove this line to remove the warning
```

Get started to install dependencies for the system.

### First, intall the AUR packages.

```bash
sudo pacman -Syu

sudo pacman -S --needed git base-devel
git clone https://aur.archlinux.org/yay.git ~/yay
cd ~/yay
makepkg -si
rm -rf ~/yay
```

### Second, install the following packages:

```bash
sudo pacman -S zsh swayidle hyprpaper p7zip wofi pavucontrol thunar gvfs brightnessctl playerctl fastfetch btop cliphist wl-clipboard xfce4-settings grim slurp lsd
sudo yay -S swaylock-effects lazygit floorp-bin wlogout hyprpicker-git nwg-look
```

If Jappanese/Chinese/Korean font not display correctly

```bash
sudo pacman -S noto-fonts noto-fonts-cjk noto-fonts-emoji
```

Install `Oh My Zsh` to customize the terminal.

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

Then, install oh-my-zsh plugins

```bash
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
```

If you using `Nvidia` GPU, you can install the following packages

```bash
sudo pacman -S nvidia-dkms nvidia-utils
```

Then, add this line to end of `/etc/default/grub`

```bash title="/etc/default/grub"
GRUB_CMDLINE_LINUX_DEFAULT="loglevel=3 quiet nvidia_drm.modeset=1"

sudo grub-mkconfig -o /boot/grub/grub.cfg
```

Then, add this line to end of `/etc/mkinitcpio.conf`

```bash title="/etc/mkinitcpio.conf"
MODULES=(nvidia nvidia_modeset nvidia_uvm nvidia_drm)

sudo mkinitcpio -P
```

Optional: Install `miniconda3` for python and `nvm` for nodejs development environment

```bash title="Install miniconda3"
mkdir -p ~/.miniconda3
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh -O ~/.miniconda3/miniconda.sh
bash ~/.miniconda3/miniconda.sh -b -u -p ~/.miniconda3
rm -rf ~/.miniconda3/miniconda.sh
~/.miniconda3/bin/conda init zsh
```

```bash title="Install nvm"
yay -S nvm

# Install the latest LTS version of nodejs
nvm install --lts

# Check the version of nodejs
node -v

# Optional: Install `bun`
npm install -g bun
```

> Remember to config git ssh key before doing the next step

Next, clone my `dotfiles` repository to customize the system.

```bash
git clone git@github.com:tiesen243/dotfiles.git ~/dotfiles
```

### Customize the system

1. Change the content of `~/.config/hypr/hyprland.conf` to

```bash title="~/.config/hypr/hyprland.conf"
source = ~/dotfiles/hypr/hyprland.conf
```

2. Copy folder `~/dotfiles/zsh/theme` to `~/.oh-my-zsh/custom/themes`

```bash
cp -r ~/dotfiles/zsh/theme/* ~/.oh-my-zsh/custom/themes
```

Then, change the content of `~/.zshrc` to

```bash
source ~/dotfiles/zsh/config.zsh
```

### Change theme and wallpaper

1. Change Themes

```bash
cp -r ~/dotfiles/.fonts ~/
cp -r ~/dotfiles/.icons ~/
cp -r ~/dotfiles/.themes ~/
```

Then, open `nwg-look` to change the theme.

2. Change wallpaper

```bash title="~/dotfiles/hypr/hyprpaper.conf"
preload = ~/path/to/wallpaper
wallpaper = ,~/path/to/wallpaper
```

Or just change file in `~/dotfiles/assets/background.png`

3. If you need to use `obs` to record the screen, you can install the following packages

```bash
sudo pacman -S obs-studio
yay -S wlrobs
```

## Key mapping

- `Win + Enter`: Open the terminal (kitty)
- `Win + B`: Open the browser (floorp)
- `Win + E`: Open the file manager (thunar)
- `Win + Space`: Open the application menu (wofi)
- `Win + A`: Open the audio control (pavucontrol)
- `Win + H/J/K/L`: Move the focus to the left/down/up/right
- `Win + Shift + H/J/K/L`: Move the window to the left/down/up/right
- `Win + Q`: Close the window
- `Win + Shift + Q`: Open the logout menu (wlogout)
- `Win + [1-9]`: Switch to the workspace [1-9]
- `Win + Shift + [1-9]`: Move the window to the workspace [1-9]
- `Win + W`: Open the special workspace
- `Win + Shift + W`: Move the window to the special workspace
- And more: `~/dotfiles/hypr/keymap.conf`

## Conclusion

In this tutorial, you have learned how to install Arch Linux with Hyprland OS on your computer. You have also learned how to set up the system and customize it to your liking. I hope this tutorial has been helpful to you, and I wish you the best of luck with your new Arch Linux system. If you have any questions or need further assistance, please feel free to ask. Thank you for reading!

Document: [Hyprland](https://hyprland.com/)
