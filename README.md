# news-feed-parser

There are 3 modules to this news feed parser:

1) The first module will crawl the Facebook and Twitter feeds.

2) The second module will extract important concepts from the feed. i.e. entities, links or twitter
usernames.

3) The third module will format each post as follows:
- Entities should be wrapped in "strong" tags
- Links should be wrapped in "a href" tags that point to the corresponding links
- Twitter usernames should be wrapped in "a href" tags that point to
"http://twitter.com/username" and are displayed as the username
