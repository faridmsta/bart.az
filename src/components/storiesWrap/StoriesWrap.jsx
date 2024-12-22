import React, { useState } from 'react'
import Stories from './stories/Stories'
import StoriesFocused from './storiesFocused/StoriesFocused'


const stories = [
    {
        id: 1,
        src: "https://as2.ftcdn.net/v2/jpg/00/09/88/43/1000_F_9884304_0YtUKPnotnMWmGCber4G4vJP6C4Pwv6m.jpg",
        stories: [
            {
                title:'Samsung Galaxy S24 Onyx Black 128GB/8GB',
                location:'Bakı',
                date:{
                    day:21,
                    month:'setyabr',
                    year:2024
                },
                image:"https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/article/Apple-iPhone-16-Pro-hero-240909_inline.jpg.large.jpg",
                user:{
                    name:'Elnur Mobile',
                    image:'https://png.pngtree.com/png-clipart/20240709/original/pngtree-casual-man-flat-design-avatar-profile-picture-vector-png-image_15526568.png'
                },
                
            },
            {
                title:'Samsung Galaxy S24 Onyx Black 128GB/8GB',
                location:'Bakı',
                date:{
                    day:21,
                    month:'setyabr',
                    year:2024
                },
                image:"https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/article/Apple-iPhone-16-Pro-hero-240909_inline.jpg.large.jpg",
                user:{
                    name:'Elnur Mobile',
                    image:'https://png.pngtree.com/png-clipart/20240709/original/pngtree-casual-man-flat-design-avatar-profile-picture-vector-png-image_15526568.png'
                },
                
            },
            

        ],
        title: "Hövsanda torpaq satılır"
    },
    {
        id: 2,
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTViz6PmAb_BABX3n8momY87YM_V1Tv_F_N5w&s",
        stories: [
            {
                title:'Samsung Galaxy S24 Onyx Black 128GB/8GB',
                location:'Bakı',
                date:{
                    day:21,
                    month:'setyabr',
                    year:2024
                },
                image:"https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/article/Apple-iPhone-16-Pro-hero-240909_inline.jpg.large.jpg",
                user:{
                    name:'Elnur Mobile',
                    image:'https://png.pngtree.com/png-clipart/20240709/original/pngtree-casual-man-flat-design-avatar-profile-picture-vector-png-image_15526568.png'
                },
                
            },
        ],
        title: "Kia Sorento 2020, 2.2 motor"
    },
    {
        id: 3,
        src: "https://media.gettyimages.com/id/1302001997/photo/african-american-man-watching-a-tutorial-for-handling-a-washing-machine.jpg?s=612x612&w=gi&k=20&c=4MjdukjJkiK1GSMFBrnRkFa7tLUBFvELCmH7Y8FwUE0=",
        stories: [
            {
                title:'Samsung Galaxy S24 Onyx Black 128GB/8GB',
                location:'Bakı',
                date:{
                    day:21,
                    month:'setyabr',
                    year:2024
                },
                image:"https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/article/Apple-iPhone-16-Pro-hero-240909_inline.jpg.large.jpg",
                user:{
                    name:'Elnur Mobile',
                    image:'https://png.pngtree.com/png-clipart/20240709/original/pngtree-casual-man-flat-design-avatar-profile-picture-vector-png-image_15526568.png'
                },
                
            },
        ],
        title: "Amin Əmlak daşınmaz lorem"
    },
    {
        id: 4,
        src: "https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/article/Apple-iPhone-16-Pro-hero-240909_inline.jpg.large.jpg",
        stories: [
            {
                title:'Samsung Galaxy S24 Onyx Black 128GB/8GB',
                location:'Bakı',
                date:{
                    day:21,
                    month:'setyabr',
                    year:2024
                },
                image:"https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/article/Apple-iPhone-16-Pro-hero-240909_inline.jpg.large.jpg",
                user:{
                    name:'Elnur Mobile',
                    image:'https://png.pngtree.com/png-clipart/20240709/original/pngtree-casual-man-flat-design-avatar-profile-picture-vector-png-image_15526568.png'
                },
                
            },
        ],
        title: "Iphone 16 pro max"
    },
    {
        id: 5,
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAixks3_YmU60IwZPs_WmpC6D5I0Y_wYUPdg&s",
        stories: [
            {
                title:'Samsung Galaxy S24 Onyx Black 128GB/8GB',
                location:'Bakı',
                date:{
                    day:21,
                    month:'setyabr',
                    year:2024
                },
                image:"https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/article/Apple-iPhone-16-Pro-hero-240909_inline.jpg.large.jpg",
                user:{
                    name:'Elnur Mobile',
                    image:'https://png.pngtree.com/png-clipart/20240709/original/pngtree-casual-man-flat-design-avatar-profile-picture-vector-png-image_15526568.png'
                },
                
            },
        ],
        title: "Coffee shop"
    },
    {
        id: 6,
        src: "https://as2.ftcdn.net/v2/jpg/04/96/10/89/1000_F_496108987_wgViLILc4cg8xwZ0Lu31u0pPvRxsMDsK.jpg",
        stories: [
            {
                title:'Samsung Galaxy S24 Onyx Black 128GB/8GB',
                location:'Bakı',
                date:{
                    day:21,
                    month:'setyabr',
                    year:2024
                },
                image:"https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/article/Apple-iPhone-16-Pro-hero-240909_inline.jpg.large.jpg",
                user:{
                    name:'Elnur Mobile',
                    image:'https://png.pngtree.com/png-clipart/20240709/original/pngtree-casual-man-flat-design-avatar-profile-picture-vector-png-image_15526568.png'
                },
                
            },
        ],
        title: "Dəniz Cehizim"
    },
    {
        id: 7,
        src: "https://as2.ftcdn.net/v2/jpg/04/96/10/89/1000_F_496108987_wgViLILc4cg8xwZ0Lu31u0pPvRxsMDsK.jpg",
        stories: [
            {
                title:'Samsung Galaxy S24 Onyx Black 128GB/8GB',
                location:'Bakı',
                date:{
                    day:21,
                    month:'setyabr',
                    year:2024
                },
                image:"https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/article/Apple-iPhone-16-Pro-hero-240909_inline.jpg.large.jpg",
                user:{
                    name:'Elnur Mobile',
                    image:'https://png.pngtree.com/png-clipart/20240709/original/pngtree-casual-man-flat-design-avatar-profile-picture-vector-png-image_15526568.png'
                },
                
            },
        ],
        title: "Dəniz Cehizim"
    },
    {
        id: 8,
        src: "https://as2.ftcdn.net/v2/jpg/04/96/10/89/1000_F_496108987_wgViLILc4cg8xwZ0Lu31u0pPvRxsMDsK.jpg",
        stories: [
            {
                title:'Samsung Galaxy S24 Onyx Black 128GB/8GB',
                location:'Bakı',
                date:{
                    day:21,
                    month:'setyabr',
                    year:2024
                },
                image:"https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/article/Apple-iPhone-16-Pro-hero-240909_inline.jpg.large.jpg",
                user:{
                    name:'Elnur Mobile',
                    image:'https://png.pngtree.com/png-clipart/20240709/original/pngtree-casual-man-flat-design-avatar-profile-picture-vector-png-image_15526568.png'
                },
                
            },
        ],
        title: "Dəniz Cehizim"
    },
    {
        id: 9,
        src: "https://as2.ftcdn.net/v2/jpg/04/96/10/89/1000_F_496108987_wgViLILc4cg8xwZ0Lu31u0pPvRxsMDsK.jpg",
        stories: [
            {
                title:'Samsung Galaxy S24 Onyx Black 128GB/8GB',
                location:'Bakı',
                date:{
                    day:21,
                    month:'setyabr',
                    year:2024
                },
                image:"https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/article/Apple-iPhone-16-Pro-hero-240909_inline.jpg.large.jpg",
                user:{
                    name:'Elnur Mobile',
                    image:'https://png.pngtree.com/png-clipart/20240709/original/pngtree-casual-man-flat-design-avatar-profile-picture-vector-png-image_15526568.png'
                },
                
            },
        ],
        title: "Dəniz Cehizim"
    },
    {
        id: 10,
        src: "https://as2.ftcdn.net/v2/jpg/04/96/10/89/1000_F_496108987_wgViLILc4cg8xwZ0Lu31u0pPvRxsMDsK.jpg",
        stories: [
            {
                title:'Samsung Galaxy S24 Onyx Black 128GB/8GB',
                location:'Bakı',
                date:{
                    day:21,
                    month:'setyabr',
                    year:2024
                },
                image:"https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/article/Apple-iPhone-16-Pro-hero-240909_inline.jpg.large.jpg",
                user:{
                    name:'Elnur Mobile',
                    image:'https://png.pngtree.com/png-clipart/20240709/original/pngtree-casual-man-flat-design-avatar-profile-picture-vector-png-image_15526568.png'
                },
                
            },
            {
                title:'Samsung Galaxy S24 Onyx Black 128GB/8GB',
                location:'Bakı',
                date:{
                    day:21,
                    month:'setyabr',
                    year:2024
                },
                image:"https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/article/Apple-iPhone-16-Pro-hero-240909_inline.jpg.large.jpg",
                user:{
                    name:'Elnur Mobile',
                    image:'https://png.pngtree.com/png-clipart/20240709/original/pngtree-casual-man-flat-design-avatar-profile-picture-vector-png-image_15526568.png'
                },
                
            },
        ],
        title: "Dəniz Cehizim"
    },
    
]

function StoriesWrap() {
    const [startingStory, setStartingStory] = useState(1);
    const [isFocusStory, setIsFocusStory] = useState(false);
    return (
        <>
            {
                isFocusStory && <StoriesFocused stories={stories} startingStory={startingStory} setIsFocusStory={setIsFocusStory} />
            }
            <Stories stories={stories} setStartingStory={setStartingStory} setIsFocusStory={setIsFocusStory} />
        </>
    )
}

export default StoriesWrap