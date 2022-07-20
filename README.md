<p>
This project is made by following this <a href="shorturl.at/ozCHP">tutorial</a>.
</p>
<p>
Some updates and changes are made since the tutorial is made before the official deno release or with one of the most earliest deno version, and some modules also have been changed since then.
</p>
<p>
Install deno by following the instructions <a href="https://deno.land/#installation">here</a>
<br>
Clone or download the project and just run this command to start the server
<br> 
<span>deno run --allow-net --allow-read app.ts</span>
</p>
<br>
<h4>Lock modules</h4>
<p>
 To check if the module files have been compromised.
</p>
<p>
bash command: deno cache --lock=[filenametocreate].json --lock-write [filefromwheretolock]
<br>
example: deno cache --lock=lock.json --lock-write moduledeps.ts
This will create the lock file.
</p>
<p>
Compare/Check the lock file keys: deno cache --reload (optional to force deno) --lock=[lockfilename] [filetocheckkeys]
<br>
example: deno cache --reload --lock=lock.json moduledeps.ts
</p>
<br>
<h4>Integrated test</h4>
<p>
command: <span>deno test</span>
</p>
<p>In this case a *.test.js/ts file is required. Example to follow</p>
