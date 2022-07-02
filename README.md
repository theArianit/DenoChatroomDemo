<p>
This project is made by following this <a href="shorturl.at/ozCHP">tutorial</a>.
</p>
<p>
Some updates and changes are made since the tutorial is made before the official deno release or with one of the most earliest deno version, and some modules also have been changed since then.
</p>
<br>
<h4>Lock modules</h4>
<p>
bash command: deno cache --lock=[filenametocreate].json --lock-write [filefromwheretolock]
example: deno cache --lock=lock.json --lock-write moduledeps.ts
This will create the lock file.
</p>
<p>
Compare/Check the lock file keys: deno cache --reload (optional to force deno) --lock=[lockfilename] [filetocheckkeys]
example: deno cache --reload --lock=lock.json moduledeps.ts
</p>