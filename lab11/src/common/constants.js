export const API = {
    key: 'd2e604dc8a07b6adfa7d77cbf848f3cb',
    url: 'https://api.openweathermap.org/data/2.5/'
}

export const WEATHER_TYPES = {
    'default': 'https://photos.travellerspoint.com/250455/large_IMG_0101.jpg',
    'Thunderstorm': 'https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fimages%2Fnature%2Fthunderstorm&psig=AOvVaw2r5D6ep3feHNbPxX7u429E&ust=1614531995906000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJDE2cTGiu8CFQAAAAAdAAAAABAD',
    'Drizzle': 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%2Fimages%3Fk%3Ddrizzle&psig=AOvVaw0bP6QURat0h9dZhewE6S0P&ust=1614532075604000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMDfrOrGiu8CFQAAAAAdAAAAABAD',
    'Rain': 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpapercave.com%2Frainy-background&psig=AOvVaw19bXu_CPhblqm_pJar259C&ust=1614532330838000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNiO9-THiu8CFQAAAAAdAAAAABAP',
    'Snow': 'https://photos.travellerspoint.com/250455/large_IMG_0101.jpg',
    'Mist': 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fru%2Fvideo%2Fclip-8855752-abstract-background-animation---smoke-fog-mist&psig=AOvVaw3ztGXEZynggLcVUoCgxr3k&ust=1614546288256000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLierub7iu8CFQAAAAAdAAAAABAm',
    'Smoke': 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fphotos.com%2Ffeatured%2Fabstract-smoke-background-lastsax.html&psig=AOvVaw0GqINMdQX-HwlqzJp-hNK9&ust=1614546340220000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJj1mPz7iu8CFQAAAAAdAAAAABAJ',
    'Haze': 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fvideo%2Fclip-1021451215-atmospheric-smoke-4k-haze-background-abstract-cloud&psig=AOvVaw0N0iGpDrgOXCYQu_a7jnxD&ust=1614546370504000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOjio4r8iu8CFQAAAAAdAAAAABAD',
    'Dust': 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.sacurrent.com%2Fthe-daily%2Farchives%2F2018%2F07%2F16%2Fweather-service-photos-show-just-how-badly-saharan-dust-is-screwing-up-our-air&psig=AOvVaw17lSLiXHFmhh1wboua13Kn&ust=1614546441810000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMjp16z8iu8CFQAAAAAdAAAAABAD',
    'Fog': 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.somersetlive.co.uk%2Fnews%2Fsomerset-news%2Fwarning-thick-fog-patches-drivers-3688501&psig=AOvVaw3hcXlA0E3drvyW5D7TtWhX&ust=1614546462365000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOijsbb8iu8CFQAAAAAdAAAAABAQ',
    'Sand': 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.emirates247.com%2Fnews%2Femirates%2Fuae-weather-skies-clear-but-rain-forecast-still-in-place-2013-04-08-1.501458&psig=AOvVaw25RSq_ef09J54gwDdr6xWh&ust=1614546483444000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIi458H8iu8CFQAAAAAdAAAAABAJ',
    'Ash': 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fphotos.com%2Ffeatured%2Fabstract-smoke-background-lastsax.html&psig=AOvVaw0GqINMdQX-HwlqzJp-hNK9&ust=1614546340220000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJj1mPz7iu8CFQAAAAAdAAAAABAJ',
    'Squall': 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.wallpaperflare.com%2Fsky-squall-line-storm-thunderstorm-storm-hunting-forward-wallpaper-aftlv&psig=AOvVaw0YuBfF9OMhYy4ErzYk0xrg&ust=1614546545780000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKigzN78iu8CFQAAAAAdAAAAABAD',
    'Tornado': 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpaperaccess.com%2Fsevere-weather&psig=AOvVaw1kKcKOu5hE9v_QcCsmxSEu&ust=1614546561829000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCICC_eX8iu8CFQAAAAAdAAAAABAD',
    'Clear': 'https://image.freepik.com/free-photo/sunshine-clouds-sky-during-morning-background-blue-white-pastel-heaven-soft-focus-lens-flare-sunlight-abstract-blurred-cyan-gradient-peaceful-nature-open-view-out-windows-beautiful-summer-spring_1253-1092.jpg',
    'Clouds': 'https://pics.freeartbackgrounds.com/fullhd/Blue_Sky_with_Clouds_Background-1453.jpg',
}

