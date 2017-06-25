'use strict'
const http = require('http')
const fs = require('fs');
const Bot = require('messenger-bot')

let bot = new Bot({
  token: 'https//www.facebook.com/PrideBot-478909775779598/?ref=aymt_homepage_panel',
  verify: 'VERIFY_TOKEN'
})

bot.on('error', (err) => {
  console.log(err.message)
})

// bot.on('message', (payload, reply) => {
//   let input = payload.message.text

//   bot.getProfile(payload.sender.id, (err, profile) => {
//     if (err) throw err;
//     var name = profile.first_name;
    
//     if (input == "hi PrideBot") {
//       reply.say("Hi" + name + "!" + "Please send me your current location")
//     }
//     //analyzing shared location input
//     //imput should look like this: { mid: 'mid.1463464074086:96b149e1a047e47842',
//     //seq: 2076,
//     //attachments:
//       //[ { title: 'Anupam\'s Location',
//      //url: 'https://www.facebook.com/l.php?u=https%3A%2F%2Fwww.bing.com%2Fmaps%2Fdefault.aspx%3Fv%3D2%26pc%3DFACEBK%26mid%3D8100%26where1%3D19.120002%252C%2B72.863715%26FORM%3DFBKPL1%26mkt%3Den-US&h=AAQH523sr&s=1&enc=AZNmEBjv3zHHm0_dYnEIC6j7EDsJNt8PZRZZyaXbIZ6VzjPsQUOOaMIPGtXFH17CevUiNK0_K594CgDQHAMQSru7uS_jjbkxojBWNwBnncqzaw',
//      //type: 'location',
//      //payload: [Object] } ] }
//     else if (messageAttachments) {
//       lat = event.message.attachments[0].payload.coordinates.lat
//       lng = event.message.attachments[0].payload.coordinates.long

//       //Google Places API reference
//       var service = new google.maps.places.PlacesService(map);
//       var request = {
//         location: new google.maps.LatLng(lat, lng),
//         radius: 0.25
//       };
//       service.search(request, function(results) {
//         console.log(results.length);
//         for (var i = 0; i < results.length; i++) {
//           console.log(results[i].name, results[i].types)
//         }
//       });
//       reply.say(console)
//     }
//     else if () {
//       reply.say("Please rate your experience at this venue")
//     } else if () {
//       reply.say("Thank you! Your rating has been saved")
//     }





//   bot.getProfile(payload.sender.id, (err, profile) => {
//     if (err) throw err

//     reply({ text }, (err) => {
//       if (err) throw err

//       console.log(`Echoed back to ${profile.first_name} ${profile.last_name}: ${text}`)
//     })
//   })
// })

// // bot server
// http.createServer(bot.middleware()).listen(8445)

// map server
http.createServer(function (req, res) {
  fs.readFile('fb.html',function (err, data){
    res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
    res.write(data);
    res.end();
  });
}).listen(process.env.PORT || 5000)
