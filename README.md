YouTube Two-Stage Playback Sample
=================================

A sample that demonstrates how to link the playing of a YouTube video to the click
of a static thumbnail image.

Introduction
------------

The current <iframe>-based embed code can be a bit “heavy-weight” for large
websites. Additionally, clicking on the <iframe> starts a video playing inside
itself. The preference of many host websites is to show a static image thumbnail
and handle clicks on the thumbnail to, e.g., create an autoplaying embed in
another location on the page, or even redirect to a new page which then autoplays.

Two-stage playback provides a simple way to do this. In addition, when a
user clicks the thumbnail, the intent to watch is clear (as opposed to
standard autoplaying embeds). This allows the video's view count and other
statistics to be updated accurately.

Prerequisites
--------------

Read the following guides:

- [YouTube Embedded Player Parameters](https://developers.google.com/youtube/player_parameters)
- [YouTube IFrame Player API](https://developers.google.com/youtube/iframe_api_reference)


Getting Started
---------------

To view the sample:

1. Download the src/ folder to your local machine.
2. Navigate to the local src/ directory.
3. If you don't have one running, turn on a local HTTP server. One way to do this is
   by means of the Python's [SimpleHTTPServer](https://docs.python.org/2/library/simplehttpserver.html):

   `python -m SimpleHTTPServer 8000`

   See, for example, [Really Simple HTTP Server in Python](http://www.linuxjournal.com/content/tech-tip-really-simple-http-server-python) for details on this method.
4. Open `http://127.0.0.1:8000/two_stage_playback.html` in a browser.


Support
-------

- [Stack Overflow](http://stackoverflow.com/questions/tagged/youtube-api)

If you've found an error in this sample, please file an issue:
https://github.com/youtube/yt-2stage-playback

Patches are encouraged, and may be submitted by forking this project and
submitting a pull request through GitHub. If you wish to contribute
to this sample, please review and submit a [Google Individual Contributor
License Agreement (CLA)](https://developers.google.com/open-source/cla/individual).


License
-------

Copyright 2014 Google, Inc.

Licensed to the Apache Software Foundation (ASF) under one
or more contributor license agreements.  See the NOTICE file
distributed with this work for additional information
regarding copyright ownership.  The ASF licenses this file
to you under the Apache License, Version 2.0 (the
"License"); you may not use this file except in compliance
with the License.  You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing,
software distributed under the License is distributed on an
"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, either express or implied.  See the License for the
specific language governing permissions and limitations
under the License.
