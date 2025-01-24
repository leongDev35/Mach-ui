import React from 'react'
import TagsList from './TagsList'

export default function Tags({ setListTags }) {
    const contentWarning = ["Gore", "Sexual Violence"]
    const format = [
        "4-Koma",
        "Adaptation",
        "Anthology",
        "Award Winning",
        "Doujinshi",
        "Fan Colored",
        "Full Color",
        "Long Strip",
        "Official Colored",
        "Oneshot",
        "Self-Published",
        "Web Comic",
    ];

    const genres = [
        "Action",
        "Adventure",
        "Boys' Love",
        "Comedy",
        "Crime",
        "Drama",
        "Fantasy",
        "Girls' Love",
        "Historical",
        "Horror",
        "Isekai",
        "Magical Girls",
        "Mecha",
        "Medical",
        "Mystery",
        "Philosophical",
        "Psychological",
        "Romance",
        "Sci-Fi",
        "Slice of Life",
        "Sports",
        "Superhero",
        "Thriller",
        "Tragedy",
        "Wuxia",
    ];

    const themes = [
        "Aliens",
        "Animals",
        "Cooking",
        "Crossdressing",
        "Delinquents",
        "Demons",
        "Genderswap",
        "Ghosts",
        "Gyaru",
        "Harem",
        "Incest",
        "Loli",
        "Mafia",
        "Magic",
        "Martial Arts",
        "Military",
        "Monster Girls",
        "Monsters",
        "Music",
        "Ninja",
        "Office Workers",
        "Police",
        "Post-Apocalyptic",
        "Reincarnation",
        "Reverse Harem",
        "Samurai",
        "School Life",
        "Shota",
        "Supernatural",
        "Survival",
        "Time Travel",
        "Traditional Games",
        "Vampires",
        "Video Games",
        "Villainess",
        "Virtual Reality",
        "Zombies",
    ];

    const demographics = ["Shonen",
        "Kodomo",
        "Seinen",
        "Shōjo",
        "Josei",
        "Seijin/Ero Manga",
        "Redisu/Lady’s Manga",
        "Dōjinshi Manga",
        "Gekiga",
        "Silver & Golden"]

    return (
        <div className='w-full'>
            <TagsList setListTags={setListTags} header="Content Warning" tags={contentWarning}> </TagsList>
            <TagsList setListTags={setListTags} header="Format" tags={format}> </TagsList>
            <TagsList setListTags={setListTags} header="Genre" tags={genres}></TagsList>
            <TagsList setListTags={setListTags} header="Theme" tags={themes}></TagsList>
            <TagsList setListTags={setListTags} header="Demographic" tags={demographics}></TagsList>
        </div>
    )
}
