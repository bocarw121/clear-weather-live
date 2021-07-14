let icons = {
  clear: {
    day: "https://gist.githack.com/bocarw121/035adb5917bfe5dc36f015d4373d0b4d/raw/5deaa0b6ef983e926be4a341b033471a8beb5d74/day.svg",
    night:
      "https://gist.githack.com/bocarw121/035adb5917bfe5dc36f015d4373d0b4d/raw/5deaa0b6ef983e926be4a341b033471a8beb5d74/night.svg",
  },
  cloudy:
    "https://gist.githack.com/bocarw121/035adb5917bfe5dc36f015d4373d0b4d/raw/5deaa0b6ef983e926be4a341b033471a8beb5d74/cloudy.svg",
  cloudyDay: {
    one: "https://gist.githack.com/bocarw121/035adb5917bfe5dc36f015d4373d0b4d/raw/5deaa0b6ef983e926be4a341b033471a8beb5d74/cloudy-day-1.svg",
    two: "https://gist.githack.com/bocarw121/035adb5917bfe5dc36f015d4373d0b4d/raw/5deaa0b6ef983e926be4a341b033471a8beb5d74/cloudy-day-2.svg",
    three:
      "https://gist.githack.com/bocarw121/035adb5917bfe5dc36f015d4373d0b4d/raw/5deaa0b6ef983e926be4a341b033471a8beb5d74/cloudy-day-3.svg",
  },
  cloudyNight: {
    one: "https://gist.githack.com/bocarw121/035adb5917bfe5dc36f015d4373d0b4d/raw/5deaa0b6ef983e926be4a341b033471a8beb5d74/cloudy-night-1.svg",
    two: "https://gist.githack.com/bocarw121/035adb5917bfe5dc36f015d4373d0b4d/raw/5deaa0b6ef983e926be4a341b033471a8beb5d74/cloudy-night-2.svg",
    three:
      "https://gist.githack.com/bocarw121/035adb5917bfe5dc36f015d4373d0b4d/raw/5deaa0b6ef983e926be4a341b033471a8beb5d74/cloudy-night-3.svg",
  },
  rainy: {
    one: "https://gist.githack.com/bocarw121/035adb5917bfe5dc36f015d4373d0b4d/raw/5deaa0b6ef983e926be4a341b033471a8beb5d74/rainy-1.svg",
    two: "https://gist.githack.com/bocarw121/035adb5917bfe5dc36f015d4373d0b4d/raw/5deaa0b6ef983e926be4a341b033471a8beb5d74/rainy-2.svg",
    three:
      "https://gist.githack.com/bocarw121/035adb5917bfe5dc36f015d4373d0b4d/raw/5deaa0b6ef983e926be4a341b033471a8beb5d74/rainy-3.svg",
    four: "https://gist.githack.com/bocarw121/035adb5917bfe5dc36f015d4373d0b4d/raw/5deaa0b6ef983e926be4a341b033471a8beb5d74/rainy-4.svg",
    five: "https://gist.githack.com/bocarw121/035adb5917bfe5dc36f015d4373d0b4d/raw/5deaa0b6ef983e926be4a341b033471a8beb5d74/rainy-5.svg",
    six: "https://gist.githack.com/bocarw121/035adb5917bfe5dc36f015d4373d0b4d/raw/5deaa0b6ef983e926be4a341b033471a8beb5d74/rainy-6.svg",
    seven:
      "https://gist.githack.com/bocarw121/035adb5917bfe5dc36f015d4373d0b4d/raw/5deaa0b6ef983e926be4a341b033471a8beb5d74/rainy-7.svg",
  },
  snowy: {
    one: "https://gist.githack.com/bocarw121/035adb5917bfe5dc36f015d4373d0b4d/raw/5deaa0b6ef983e926be4a341b033471a8beb5d74/snowy-1.svg",
    two: "https://gist.githack.com/bocarw121/035adb5917bfe5dc36f015d4373d0b4d/raw/5deaa0b6ef983e926be4a341b033471a8beb5d74/snowy-2.svg",
    three:
      "https://gist.githack.com/bocarw121/035adb5917bfe5dc36f015d4373d0b4d/raw/5deaa0b6ef983e926be4a341b033471a8beb5d74/snowy-3.svg",
    four: "https://gist.githack.com/bocarw121/035adb5917bfe5dc36f015d4373d0b4d/raw/5deaa0b6ef983e926be4a341b033471a8beb5d74/snowy-4.svg",
    five: "https://gist.githack.com/bocarw121/035adb5917bfe5dc36f015d4373d0b4d/raw/5deaa0b6ef983e926be4a341b033471a8beb5d74/snowy-5.svg",
    six: "https://gist.githack.com/bocarw121/035adb5917bfe5dc36f015d4373d0b4d/raw/5deaa0b6ef983e926be4a341b033471a8beb5d74/snowy-6.svg",
  },
  thunder:
    "https://gist.githack.com/bocarw121/035adb5917bfe5dc36f015d4373d0b4d/raw/5deaa0b6ef983e926be4a341b033471a8beb5d74/thunder.svg",
};

if (process.env.NODE_ENV === "production") {
  icons = {
    clear: {
      day: "https://gistcdn.githack.com/bocarw121/035adb5917bfe5dc36f015d4373d0b4d/raw/5deaa0b6ef983e926be4a341b033471a8beb5d74/day.svg",
      night:
        "https://gistcdn.githack.com/bocarw121/035adb5917bfe5dc36f015d4373d0b4d/raw/5deaa0b6ef983e926be4a341b033471a8beb5d74/night.svg",
    },
    cloudy:
      "https://gistcdn.githack.com/bocarw121/035adb5917bfe5dc36f015d4373d0b4d/raw/5deaa0b6ef983e926be4a341b033471a8beb5d74/cloudy.svg",
    cloudyDay: {
      one: "https://gistcdn.githack.com/bocarw121/035adb5917bfe5dc36f015d4373d0b4d/raw/5deaa0b6ef983e926be4a341b033471a8beb5d74/cloudy-day-1.svg",
      two: "https://gistcdn.githack.com/bocarw121/035adb5917bfe5dc36f015d4373d0b4d/raw/5deaa0b6ef983e926be4a341b033471a8beb5d74/cloudy-day-2.svg",
      three:
        "https://gistcdn.githack.com/bocarw121/035adb5917bfe5dc36f015d4373d0b4d/raw/5deaa0b6ef983e926be4a341b033471a8beb5d74/cloudy-day-3.svg",
    },
    cloudyNight: {
      one: "https://gistcdn.githack.com/bocarw121/035adb5917bfe5dc36f015d4373d0b4d/raw/5deaa0b6ef983e926be4a341b033471a8beb5d74/cloudy-night-1.svg",
      two: "https://gistcdn.githack.com/bocarw121/035adb5917bfe5dc36f015d4373d0b4d/raw/5deaa0b6ef983e926be4a341b033471a8beb5d74/cloudy-night-2.svg",
      three:
        "https://gistcdn.githack.com/bocarw121/035adb5917bfe5dc36f015d4373d0b4d/raw/5deaa0b6ef983e926be4a341b033471a8beb5d74/cloudy-night-3.svg",
    },
    rainy: {
      one: "https://gistcdn.githack.com/bocarw121/035adb5917bfe5dc36f015d4373d0b4d/raw/5deaa0b6ef983e926be4a341b033471a8beb5d74/rainy-1.svg",
      two: "https://gistcdn.githack.com/bocarw121/035adb5917bfe5dc36f015d4373d0b4d/raw/5deaa0b6ef983e926be4a341b033471a8beb5d74/rainy-2.svg",
      three:
        "https://gistcdn.githack.com/bocarw121/035adb5917bfe5dc36f015d4373d0b4d/raw/5deaa0b6ef983e926be4a341b033471a8beb5d74/rainy-3.svg",
      four: "https://gistcdn.githack.com/bocarw121/035adb5917bfe5dc36f015d4373d0b4d/raw/5deaa0b6ef983e926be4a341b033471a8beb5d74/rainy-4.svg",
      five: "https://gistcdn.githack.com/bocarw121/035adb5917bfe5dc36f015d4373d0b4d/raw/5deaa0b6ef983e926be4a341b033471a8beb5d74/rainy-5.svg",
      six: "https://gistcdn.githack.com/bocarw121/035adb5917bfe5dc36f015d4373d0b4d/raw/5deaa0b6ef983e926be4a341b033471a8beb5d74/rainy-6.svg",
      seven:
        "https://gistcdn.githack.com/bocarw121/035adb5917bfe5dc36f015d4373d0b4d/raw/5deaa0b6ef983e926be4a341b033471a8beb5d74/rainy-7.svg",
    },
    snowy: {
      one: "https://gistcdn.githack.com/bocarw121/035adb5917bfe5dc36f015d4373d0b4d/raw/5deaa0b6ef983e926be4a341b033471a8beb5d74/snowy-1.svg",
      two: "https://gistcdn.githack.com/bocarw121/035adb5917bfe5dc36f015d4373d0b4d/raw/5deaa0b6ef983e926be4a341b033471a8beb5d74/snowy-2.svg",
      three:
        "https://gistcdn.githack.com/bocarw121/035adb5917bfe5dc36f015d4373d0b4d/raw/5deaa0b6ef983e926be4a341b033471a8beb5d74/snowy-3.svg",
      four: "https://gistcdn.githack.com/bocarw121/035adb5917bfe5dc36f015d4373d0b4d/raw/5deaa0b6ef983e926be4a341b033471a8beb5d74/snowy-4.svg",
      five: "https://gistcdn.githack.com/bocarw121/035adb5917bfe5dc36f015d4373d0b4d/raw/5deaa0b6ef983e926be4a341b033471a8beb5d74/snowy-5.svg",
      six: "https://gistcdn.githack.com/bocarw121/035adb5917bfe5dc36f015d4373d0b4d/raw/5deaa0b6ef983e926be4a341b033471a8beb5d74/snowy-6.svg",
    },
    thunder:
      "https://gistcdn.githack.com/bocarw121/035adb5917bfe5dc36f015d4373d0b4d/raw/5deaa0b6ef983e926be4a341b033471a8beb5d74/thunder.svg",
  };
}

export default icons;
