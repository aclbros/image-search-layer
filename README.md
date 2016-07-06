# FCC Image Search Abstraction Layer


## User stories fullfiled

    1) User Story: I can get the image URLs, alt text and page urls for a set of
       images relating to a given search string.
    2) User Story: I can paginate through the responses by adding a ?offset=2 parameter to the URL.
    3) User Story: I can get a list of the most recently submitted search strings.


## Example Usage
`http://aclbros-image-search.herokuapp.com/api/imagesearch/lolcats funny?offset=10`

### Example output
`[{"url": "http://static.tvtropes.org/logo_blue_small.png", "snippet": "A page for describing Funny: LOLCats. Memetic Mutation: Taken to a meta level. The Brunch Box, in Portland, Oregon serves a cheeseburger called " …", "thumbnail": "", "context": "http://tvtropes.org/pmwiki/pmwiki.php/Funny/LOLcats"}, {"url": "http://www.addictinggames.com/newGames/funny-games/lolcatescape/lolcatescape.png", "snippet": "Jan 15, 2010 ... The yard is full of LOLCats. But you've got to locate the kittehs INSIDE the house. Use your bestest escape skills: For Teh Kittehs! Free Online ...", "thumbnail": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQwWaa6-i79WVdT1PArdBAGtOPH1krUWeoopTAN_y8yVTTp8pzXBULnvg", "context": "http://www.addictinggames.com/funny-games/lolcatescape.jsp"}, {"url": "https://s-media-cache-ak0.pinimg.com/736x/a8/a4/56/a8a456134027dbca2f1796ded4597f66.jpg", "snippet": "This Pin was discovered by Daniel Manley. Discover (and save!) your own Pins on Pinterest.", "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcvrPH-O3mt55WvbLHSy2zom8YPLgKpFcYMUeLnQlTOdliQ7tZyYZvvwh2", "context": "https://www.pinterest.com/pin/428404983273295740/"}, {"url": "https://img.buzzfeed.com/buzzfeed-static/static/2015-03/18/20/campaign_images/webdr09/the-25-worst-cats-in-the-world-2-17377-1426725664-1_dblbig.jpg", "snippet": "Noooooo, I don't want you to kiss me! :-D #LOLcats #Funny #Cats. 13 likes 0 comments. Posted by. Funny & Crazy Cats. Psycho kitty :-D #LOLcats #Funny # ...", "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_itR1qi6ET-JBP5cEEwhn35yqa32lH32v1Px6k4BDrH2Yam8iR-xzOok", "context": "https://www.facebook.com/Funnyandcrazycats/app/188240811277030/"}, {"url": "https://s-media-cache-ak0.pinimg.com/236x/29/d8/5d/29d85dcbfa517964cb603ff4670a12c9.jpg", "snippet": "Let's Pin a collection of Cat Posters. Feel free to invite your friends. | See more about Kitty Cats, Grumpy Cat and Funny Cats.", "thumbnail": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQO-6BIq38g95NQ3WRt4hb0Rvw34d2JzaoRqkO-GIc_yqzANsNvQZ2ac9g", "context": "https://www.pinterest.com/catnday/cats-posters-lolcats/"}]`

## Example accesing latest search strings
`http://aclbros-image-search.herokuapp.com/api/latest/imagesearch`

### Example output
`[{"term": "lolcats%20funny", "when": "Wed Jul 06 2016 10:41:07 GMT+0000 (UTC)"}, {"term": "lolcats%20funny", "when": "Wed Jul 06 2016 10:54:04 GMT+0000 (UTC)"}, {"term": "lolcats%20funny", "when": "Wed Jul 06 2016 10:54:57 GMT+0000 (UTC)"}, {"term": "lolcats%20funny", "when": "Wed Jul 06 2016 11:00:06 GMT+0000 (UTC)"}]`
