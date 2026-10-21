((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
bvj(d,e,f){var w=null,v=new B.ra(C.uc,x.c),u=new B.ra(C.ik,x.c)
u=new A.aav(v,u)
u.XW(d,w,e,w)
v.r=A.bW0(u)
return u},
bW_(d,e){var w
A:{w="Hangman"
if("app.name"===e)break A
if("common.ok"===e){w="OK"
break A}if("common.loading"===e){w="Loading"
break A}if("common.retry"===e){w="Try again"
break A}if("common.backToLobby"===e){w="Back to lobby"
break A}if("splash.preparing"===e){w="Getting the game ready"
break A}if("lobby.title"===e)break A
if("lobby.subtitle"===e){w="A 1 vs 1 word race"
break A}if("lobby.nicknameLabel"===e){w="Nickname"
break A}if("lobby.nicknameHint"===e){w="Enter your nickname"
break A}if("lobby.nicknameRequired"===e){w="Enter a nickname of 1-16 characters"
break A}if("lobby.createRoom"===e){w="Create room"
break A}if("lobby.joinRoom"===e){w="Join room"
break A}if("lobby.roomCodeLabel"===e){w="4-letter room code"
break A}if("lobby.language"===e){w="Language"
break A}if("lobby.languageTh"===e){w="\u0e44\u0e17\u0e22"
break A}if("lobby.languageEn"===e){w="English"
break A}if("lobby.stagePreview"===e){w="Stage preview (dev)"
break A}if("room.loading"===e){w="Joining the room"
break A}if("room.codeLabel"===e){w="Room code"
break A}if("room.shareHint"===e){w=y.j
break A}if("room.host"===e){w="Host"
break A}if("room.guest"===e){w="Guest"
break A}if("room.you"===e){w="You"
break A}if("room.unknownPlayer"===e){w="Player"
break A}if("room.waitingForOpponent"===e){w="Waiting for an opponent..."
break A}if("room.waitingForHost"===e){w="Waiting for the host to start"
break A}if("room.start"===e){w="Start game"
break A}if("room.leave"===e){w="Leave room"
break A}if("room.closedTitle"===e){w="Room closed"
break A}if("room.closedMessage"===e){w="The host closed this room."
break A}if("match.loading"===e){w="Joining the match"
break A}if("match.round"===e){w=new A.bci()
break A}if("match.startsIn"===e){w="Starts in"
break A}if("match.wrongCount"===e){w=new A.bcj()
break A}if("match.opponent"===e){w="Opponent"
break A}if("match.you"===e){w="You"
break A}if("match.dead"===e){w="Out of guesses"
break A}if("match.score"===e){w=new A.bck()
break A}if("match.wordWas"===e){w=new A.bcl()
break A}if("match.youWonWord"===e){w="You won this word"
break A}if("match.opponentWonWord"===e){w="Your opponent won this word"
break A}if("match.drawWord"===e){w="Draw, nobody scores this word"
break A}if("match.reasonSolved"===e){w="Solved the word first"
break A}if("match.reasonOpponentDead"===e){w="Your opponent ran out of guesses"
break A}if("match.reasonYouDead"===e){w="You ran out of guesses"
break A}if("match.reasonTimeout"===e){w="Time ran out, most letters revealed wins"
break A}if("match.reasonDraw"===e){w="Time ran out and it was a tie"
break A}if("match.reasonOpponentLeft"===e){w="Your opponent left the game"
break A}if("match.reasonYouLeft"===e){w="You left the game"
break A}if("match.settling"===e){w="Settling this word..."
break A}if("stagePreview.opponentPunchesMe"===e){w="Opponent punches me"
break A}if("stagePreview.iPunchOpponent"===e){w="I punch the opponent"
break A}if("stagePreview.iGuessRight"===e){w="I guess right"
break A}if("stagePreview.iDie"===e){w="I die (hoist)"
break A}if("stagePreview.iSolve"===e){w="I solve the word"
break A}if("stagePreview.timeoutDraw"===e){w="Timeout: draw"
break A}if("stagePreview.nextRound"===e){w="Next word"
break A}if("result.title"===e){w="Match result"
break A}if("result.youWon"===e){w="You won!"
break A}if("result.youLost"===e){w="You lost"
break A}if("result.draw"===e){w="Draw"
break A}if("result.winner"===e){w=new A.bcm()
break A}if("result.score"===e){w=new A.bcn()
break A}if("result.roundsTitle"===e){w="Words"
break A}if("result.roundRow"===e){w=new A.bco()
break A}if("result.roundWinner"===e){w=new A.bcp()
break A}if("result.roundDraw"===e){w="Draw"
break A}if("result.noRounds"===e){w="No word results yet"
break A}if("result.unknownPlayer"===e){w="Player"
break A}if("genericErrorPopup.title"===e){w="Something went wrong"
break A}if("genericErrorPopup.description"===e){w=y.c
break A}if("genericErrorPopup.noInternetDescription"===e){w=y.n
break A}if("serverErrors.ROOM_NOT_FOUND"===e){w=y.f
break A}if("serverErrors.ROOM_FULL"===e){w="That room is full."
break A}if("serverErrors.ROOM_CLOSED"===e){w="That room is closed."
break A}if("serverErrors.NOT_IN_ROOM"===e){w="You are not in this room."
break A}if("serverErrors.NOT_HOST"===e){w="Only the room host can start the game."
break A}if("serverErrors.GUEST_MISSING"===e){w="The other player has not joined yet."
break A}if("serverErrors.MATCH_NOT_FOUND"===e){w="That match does not exist."
break A}if("serverErrors.NOT_A_PLAYER"===e){w="You are not a player in this match."
break A}if("serverErrors.ROUND_NOT_ACTIVE"===e){w="You cannot guess right now."
break A}if("serverErrors.LETTER_ALREADY_GUESSED"===e){w="You already guessed that letter."
break A}if("serverErrors.INVALID_LETTER"===e){w="That is not a valid letter."
break A}if("serverErrors.PLAYER_DEAD"===e){w="You have no guesses left for this word."
break A}if("serverErrors.NOT_AUTHENTICATED"===e){w=y.k
break A}w=null
break A}return w},
bW0(d){return new A.bcq(d)},
aav:function aav(d,e){var _=this
_.Q=d
_.dx=_.db=_.cy=_.cx=_.CW=_.ch=_.ax=_.at=_.as=$
_.a=e
_.z=_.y=_.x=_.w=_.r=_.f=_.d=_.c=_.b=$},
baa:function baa(){},
bab:function bab(){},
bad:function bad(){},
bag:function bag(){},
bae:function bae(){},
bah:function bah(){},
baf:function baf(){},
bac:function bac(){},
bcq:function bcq(d){this.a=d},
bci:function bci(){},
bcj:function bcj(){},
bck:function bck(){},
bcl:function bcl(){},
bcm:function bcm(){},
bcn:function bcn(){},
bco:function bco(){},
bcp:function bcp(){},
am4:function am4(){}}
B=c[0]
C=c[2]
A=a.updateHolder(c[3],A)
A.aav.prototype={
gKq(){return this.Q},
h(d,e){var w=this.Q.VG(e)
return w==null?this.ajH(0,e):w},
gqC(){var w=this.as
return w===$?this.as=this:w},
gQv(){var w=this,v=w.at
if(v===$){w.gqC()
w.at!==$&&B.aE()
v=w.at=new A.baa()}return v},
gks(){var w=this,v=w.ax
if(v===$){w.gqC()
w.ax!==$&&B.aE()
v=w.ax=new A.bab()}return v},
gkF(){var w=this,v=w.ch
if(v===$){w.gqC()
w.ch!==$&&B.aE()
v=w.ch=new A.bad()}return v},
giU(){var w=this,v=w.CW
if(v===$){w.gqC()
w.CW!==$&&B.aE()
v=w.CW=new A.bag()}return v},
gh0(){var w=this,v=w.cx
if(v===$){w.gqC()
w.cx!==$&&B.aE()
v=w.cx=new A.bae()}return v},
gz6(){var w=this,v=w.cy
if(v===$){w.gqC()
w.cy!==$&&B.aE()
v=w.cy=new A.bah()}return v},
gjm(){var w=this,v=w.db
if(v===$){w.gqC()
w.db!==$&&B.aE()
v=w.db=new A.baf()}return v},
gk8(){var w=this,v=w.dx
if(v===$){w.gqC()
w.dx!==$&&B.aE()
v=w.dx=new A.bac()}return v},
gW3(){var w=x.g
return B.P(["ROOM_NOT_FOUND",y.f,"ROOM_FULL","That room is full.","ROOM_CLOSED","That room is closed.","NOT_IN_ROOM","You are not in this room.","NOT_HOST","Only the room host can start the game.","GUEST_MISSING","The other player has not joined yet.","MATCH_NOT_FOUND","That match does not exist.","NOT_A_PLAYER","You are not a player in this match.","ROUND_NOT_ACTIVE","You cannot guess right now.","LETTER_ALREADY_GUESSED","You already guessed that letter.","INVALID_LETTER","That is not a valid letter.","PLAYER_DEAD","You have no guesses left for this word.","NOT_AUTHENTICATED",y.k],w,w)}}
A.baa.prototype={
gcI(){return"Hangman"}}
A.bab.prototype={
gxO(){return"OK"},
go6(){return"Loading"},
gadB(){return"Try again"},
gAR(){return"Back to lobby"}}
A.bad.prototype={
gfa(){return"Hangman"},
gWR(){return"A 1 vs 1 word race"},
gabM(){return"Nickname"},
gabL(){return"Enter your nickname"},
gabN(){return"Enter a nickname of 1-16 characters"},
gHA(){return"Create room"},
gJ5(){return"Join room"},
gUw(){return"4-letter room code"},
gabf(){return"Language"},
gabh(){return"\u0e44\u0e17\u0e22"},
gabg(){return"English"},
gz6(){return"Stage preview (dev)"}}
A.bag.prototype={
go6(){return"Joining the room"},
gR4(){return"Room code"},
gWx(){return y.j},
gji(){return"Host"},
gVJ(){return"Guest"},
gyA(){return"You"},
gpN(){return"Player"},
gaep(){return"Waiting for an opponent..."},
gaeo(){return"Waiting for the host to start"},
gcc(){return"Start game"},
gabk(){return"Leave room"},
ga85(){return"Room closed"},
ga84(){return"The host closed this room."}}
A.bae.prototype={
go6(){return"Joining the match"},
Uy(d,e){return"Round "+e},
gWL(){return"Starts in"},
aeE(d,e){return"Wrong "+d+" / "+e},
gmU(){return"Opponent"},
gyA(){return"You"},
ga8M(){return"Out of guesses"},
VU(d,e){return""+d+" : "+e},
aev(d){return"The word was "+d},
gaeH(){return"You won this word"},
gacf(){return"Your opponent won this word"},
ga9k(){return"Draw, nobody scores this word"},
gacP(){return"Solved the word first"},
gacN(){return"Your opponent ran out of guesses"},
gacR(){return"You ran out of guesses"},
gacQ(){return"Time ran out, most letters revealed wins"},
gacM(){return"Time ran out and it was a tie"},
gacO(){return"Your opponent left the game"},
gacS(){return"You left the game"},
gWs(){return"Settling this word..."}}
A.bah.prototype={
gJs(){return"Opponent punches me"},
gIW(){return"I punch the opponent"},
gIV(){return"I guess right"},
gIU(){return"I die (hoist)"},
gIX(){return"I solve the word"},
gJY(){return"Timeout: draw"},
gJm(){return"Next word"}}
A.baf.prototype={
gfa(){return"Match result"},
gaeG(){return"You won!"},
gaeF(){return"You lost"},
ga9c(){return"Draw"},
aes(d){return"Winner: "+d},
VV(d,e,f,g){return f+" "+g+" : "+e+" "+d},
gadJ(){return"Words"},
adH(d,e){return"Round "+d+": "+e},
adI(d){return d+" won"},
gadG(){return"Draw"},
gabO(){return"No word results yet"},
gpN(){return"Player"}}
A.bac.prototype={
gfa(){return"Something went wrong"},
gmG(){return y.c},
gTD(){return y.n}}
A.am4.prototype={}
var z=a.updateTypes([])
A.bcq.prototype={
$1(d){return A.bW_(this.a,d)},
$S:101}
A.bci.prototype={
$1$n(d){return"Round "+B.h(d)},
$S:342}
A.bcj.prototype={
$2$count$max(d,e){return"Wrong "+B.h(d)+" / "+B.h(e)},
$S:343}
A.bck.prototype={
$2$me$opponent(d,e){return B.h(d)+" : "+B.h(e)},
$S:344}
A.bcl.prototype={
$1$word(d){return"The word was "+B.h(d)},
$S:345}
A.bcm.prototype={
$1$name(d){return"Winner: "+B.h(d)},
$S:123}
A.bcn.prototype={
$4$guest$guestWins$host$hostWins(d,e,f,g){return B.h(f)+" "+B.h(g)+" : "+B.h(e)+" "+B.h(d)},
$S:347}
A.bco.prototype={
$2$n$word(d,e){return"Round "+B.h(d)+": "+B.h(e)},
$S:348}
A.bcp.prototype={
$1$name(d){return B.h(d)+" won"},
$S:123};(function inheritance(){var w=a.mixin,v=a.inherit,u=a.inheritMany
v(A.am4,B.jb)
v(A.aav,A.am4)
v(A.baa,B.aan)
v(A.bab,B.aao)
v(A.bad,B.aaq)
v(A.bag,B.aat)
v(A.bae,B.aar)
v(A.bah,B.aau)
v(A.baf,B.aas)
v(A.bac,B.aap)
u(B.pS,[A.bcq,A.bci,A.bcj,A.bck,A.bcl,A.bcm,A.bcn,A.bco,A.bcp])
w(A.am4,B.ly)})()
B.bwM(b.typeUniverse,JSON.parse('{"aav":{"jb":[],"ly":["jn","jb"]}}'))
var y={n:"No internet connection. Check your connection and try again.",j:"Share this code with your friend so they can join",f:"That room does not exist. Check the room code.",c:"We could not complete that. Please try again.",k:"You are not signed in. Please reopen the app."}
var x={g:B.K("i"),c:B.K("ra<jn,jb>")}};
(a=>{a["MUXBU3MPk+89pwhb1xPImk2PoLE="]=a.current})($__dart_deferred_initializers__);