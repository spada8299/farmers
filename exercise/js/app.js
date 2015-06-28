Parse.initialize("lb68hfMRYgqhmuro8Ook5xux5mORCjF59w6Exfek", "PAQaaFUhvx52GXTHFsZ4MeLF2aaQNrJT1xx6je2S");

var getAllCropCard = function(){
	var Crop = Parse.Object.extend("crop");
	var crop = new Parse.Query(Crop);
	crop.find({
		success: function(Crops){
			console.log(Crops);
			for(var i=0; i<Crops.length; i++){
				if(Crops[i].get('cropStatus')==="未上市"){
					$('#home').append('<a href="farmerStory_farmer_resume_forUser_1.html?id='+ Crops[i].id +'" class="infoLink col-md-6">\
              <div class="cropInfo">\
                <div class="col-md-4">\
                  <div class="tag notOnS">未上市</div>\
                  <div><img src="'+ Crops[i].get('cropImageUrl') +'" class="pic"></div>\
                  <div class="underPic"><span id="bookMarkNum"><i class="fa fa-star"></i> 0</span><span id="trackNum"><i class="fa fa-rss"></i> 0</span></div>\
                </div>\
                <div class="col-md-7">\
                  <div class="cropTitle"><b>'+ Crops[i].get('cropName') +'</b></div>\
                  <div class="underLine detail"><i class="fa fa-clock-o"></i>　'+ Crops[i].get('seedingTime') +'</div>\
                  <div class="underLine detail"><i class="fa fa-certificate"></i>　'+ Crops[i].get('feature') +'</div>\
                  <div class="detail"><i class="fa fa-bullhorn"></i>　'+ Crops[i].get("recentTitle")[0] +'<span class="recentDay">#天前</span></div>\
                </div>\
              </div>\
            </a>');
					$('#menu1').append('<a href="farmerStory_farmer_resume_forUser_1.html?id='+ Crops[i].id +'" class="infoLink col-md-6">\
              <div class="cropInfo">\
                <div class="col-md-4">\
                  <div class="tag notOnS">未上市</div>\
                  <div><img src="'+ Crops[i].get('cropImageUrl') +'" class="pic"></div>\
                  <div class="underPic"><span id="bookMarkNum"><i class="fa fa-star"></i> 0</span><span id="trackNum"><i class="fa fa-rss"></i> 0</span></div>\
                </div>\
                <div class="col-md-7">\
                  <div class="cropTitle"><b>'+ Crops[i].get('cropName') +'</b></div>\
                  <div class="underLine detail"><i class="fa fa-clock-o"></i>　'+ Crops[i].get('seedingTime') +'</div>\
                  <div class="underLine detail"><i class="fa fa-certificate"></i>　'+ Crops[i].get('feature') +'</div>\
                  <div class="detail"><i class="fa fa-bullhorn"></i>　'+ Crops[i].get('recentTitle')[0] +'<span class="recentDay">#天前</span></div>\
                </div>\
              </div>\
            </a>');
				} else if(Crops[i].get('cropStatus')==="已上市"){
					$('#home').append('<a href="farmerStory_farmer_resume_forUser_1.html?id='+ Crops[i].id +'" class="infoLink col-md-6">\
              <div class="cropInfo">\
                <div class="col-md-4">\
                  <div class="tag nowOnSale">已上市</div>\
                  <div><img src="'+ Crops[i].get('cropImageUrl') +'" class="pic"></div>\
                  <div class="underPic"><span id="bookMarkNum"><i class="fa fa-star"></i> 0</span><span id="trackNum"><i class="fa fa-rss"></i> 0</span></div>\
                </div>\
                <div class="col-md-7">\
                  <div class="cropTitle"><b>'+ Crops[i].get('cropName') +'</b></div>\
                  <div class="underLine detail"><i class="fa fa-clock-o"></i>　'+ Crops[i].get('seedingTime') +'</div>\
                  <div class="underLine detail"><i class="fa fa-certificate"></i>　'+ Crops[i].get('feature') +'</div>\
                  <div class="detail"><i class="fa fa-bullhorn"></i>　'+ Crops[i].get('recentTitle')[0] +'<span class="recentDay">#天前</span></div>\
                </div>\
              </div>\
            </a>');
					$('#menu2').append('<a href="farmerStory_farmer_resume_forUser_1.html?id='+ Crops[i].id +'" class="infoLink col-md-6">\
              <div class="cropInfo">\
                <div class="col-md-4">\
                  <div class="tag nowOnSale">已上市</div>\
                  <div><img src="'+ Crops[i].get('cropImageUrl') +'" class="pic"></div>\
                  <div class="underPic"><span id="bookMarkNum"><i class="fa fa-star"></i> 0</span><span id="trackNum"><i class="fa fa-rss"></i> 0</span></div>\
                </div>\
                <div class="col-md-7">\
                  <div class="cropTitle"><b>'+ Crops[i].get('cropName') +'</b></div>\
                  <div class="underLine detail"><i class="fa fa-clock-o"></i>　'+ Crops[i].get('seedingTime') +'</div>\
                  <div class="underLine detail"><i class="fa fa-certificate"></i>　'+ Crops[i].get('feature') +'</div>\
                  <div class="detail"><i class="fa fa-bullhorn"></i>　'+ Crops[i].get('recentTitle')[0] +'<span class="recentDay">#天前</span></div>\
                </div>\
              </div>\
            </a>');
				} else {
					$('#home').append('<a href="farmerStory_farmer_resume_forUser_1.html?id='+ Crops[i].id +'" class="infoLink col-md-6">\
              <div class="cropInfo">\
                <div class="col-md-4">\
                  <div class="tag soldOut">已售完</div>\
                  <div><img src="'+ Crops[i].get('cropImageUrl') +'" class="pic"></div>\
                  <div class="underPic"><span id="bookMarkNum"><i class="fa fa-star"></i> 0</span><span id="trackNum"><i class="fa fa-rss"></i> 0</span></div>\
                </div>\
                <div class="col-md-7">\
                  <div class="cropTitle"><b>'+ Crops[i].get('cropName') +'</b></div>\
                  <div class="underLine detail"><i class="fa fa-clock-o"></i>　'+ Crops[i].get('seedingTime') +'</div>\
                  <div class="underLine detail"><i class="fa fa-certificate"></i>　'+ Crops[i].get('feature') +'</div>\
                  <div class="detail"><i class="fa fa-bullhorn"></i>　'+ Crops[i].get('recentTitle')[0] +'<span class="recentDay">#天前</span></div>\
                </div>\
              </div>\
            </a>');
					$('#menu3').append('<a href="farmerStory_farmer_resume_forUser_1.html?id='+ Crops[i].id +'" class="infoLink col-md-6">\
              <div class="cropInfo">\
                <div class="col-md-4">\
                  <div class="tag soldOut">已售完</div>\
                  <div><img src="'+ Crops[i].get('cropImageUrl') +'" class="pic"></div>\
                  <div class="underPic"><span id="bookMarkNum"><i class="fa fa-star"></i> 0</span><span id="trackNum"><i class="fa fa-rss"></i> 0</span></div>\
                </div>\
                <div class="col-md-7">\
                  <div class="cropTitle"><b>'+ Crops[i].get('cropName') +'</b></div>\
                  <div class="underLine detail"><i class="fa fa-clock-o"></i>　'+ Crops[i].get('seedingTime') +'</div>\
                  <div class="underLine detail"><i class="fa fa-certificate"></i>　'+ Crops[i].get('feature') +'</div>\
                  <div class="detail"><i class="fa fa-bullhorn"></i>　'+ Crops[i].get('recentTitle')[0] +'<span class="recentDay">#天前</span></div>\
                </div>\
              </div>\
            </a>');
				}
			}
		},
		error: function(error){
			alert("error: " + error.message);
		}
	});
}, getUserCropCard = function(username){
	var Crop = Parse.Object.extend("crop");
	var query = new Parse.Query(Crop);
	query.equalTo("farmerName", username);
	query.find({
		success: function(Crops){
			console.log(Crops);
			for(var i=0; i<Crops.length; i++){
				if(Crops[i].get('cropStatus')==="未上市"){
					$('#home').append('<a href="farmerStory_farmer_resume_1.html?id='+ Crops[i].id +'" class="infoLink col-md-6">\
              <div class="cropInfo">\
                <div class="col-md-4">\
                  <div class="tag notOnS">未上市</div>\
                  <div><img src="'+ Crops[i].get('cropImageUrl') +'" class="pic"></div>\
                  <div class="underPic"><span id="bookMarkNum"><i class="fa fa-star"></i> 0</span><span id="trackNum"><i class="fa fa-rss"></i> 0</span></div>\
                </div>\
                <div class="col-md-7">\
                  <div class="cropTitle"><b>'+ Crops[i].get('cropName') +'</b></div>\
                  <div class="underLine detail"><i class="fa fa-clock-o"></i>　'+ Crops[i].get('seedingTime') +'</div>\
                  <div class="underLine detail"><i class="fa fa-certificate"></i>　'+ Crops[i].get('feature') +'</div>\
                  <div class="detail"><i class="fa fa-bullhorn"></i>　'+ Crops[i].get('recentTitle')[0] +'<span class="recentDay">#天前</span></div>\
                </div>\
              </div>\
            </a>');
					$('#menu1').append('<a href="farmerStory_farmer_resume_1.html?id='+ Crops[i].id +'" class="infoLink col-md-6">\
              <div class="cropInfo">\
                <div class="col-md-4">\
                  <div class="tag notOnS">未上市</div>\
                  <div><img src="'+ Crops[i].get('cropImageUrl') +'" class="pic"></div>\
                  <div class="underPic"><span id="bookMarkNum"><i class="fa fa-star"></i> 0</span><span id="trackNum"><i class="fa fa-rss"></i> 0</span></div>\
                </div>\
                <div class="col-md-7">\
                  <div class="cropTitle"><b>'+ Crops[i].get('cropName') +'</b></div>\
                  <div class="underLine detail"><i class="fa fa-clock-o"></i>　'+ Crops[i].get('seedingTime') +'</div>\
                  <div class="underLine detail"><i class="fa fa-certificate"></i>　'+ Crops[i].get('feature') +'</div>\
                  <div class="detail"><i class="fa fa-bullhorn"></i>　'+ Crops[i].get('recentTitle')[0] +'<span class="recentDay">#天前</span></div>\
                </div>\
              </div>\
            </a>');
				} else if(Crops[i].get('cropStatus')==="已上市"){
					$('#home').append('<a href="farmerStory_farmer_resume_1.html?id='+ Crops[i].id +'" class="infoLink col-md-6">\
              <div class="cropInfo">\
                <div class="col-md-4">\
                  <div class="tag nowOnSale">已上市</div>\
                  <div><img src="'+ Crops[i].get('cropImageUrl') +'" class="pic"></div>\
                  <div class="underPic"><span id="bookMarkNum"><i class="fa fa-star"></i> 0</span><span id="trackNum"><i class="fa fa-rss"></i> 0</span></div>\
                </div>\
                <div class="col-md-7">\
                  <div class="cropTitle"><b>'+ Crops[i].get('cropName') +'</b></div>\
                  <div class="underLine detail"><i class="fa fa-clock-o"></i>　'+ Crops[i].get('seedingTime') +'</div>\
                  <div class="underLine detail"><i class="fa fa-certificate"></i>　'+ Crops[i].get('feature') +'</div>\
                  <div class="detail"><i class="fa fa-bullhorn"></i>　'+ Crops[i].get('recentTitle')[0] +'<span class="recentDay">#天前</span></div>\
                </div>\
              </div>\
            </a>');
					$('#menu2').append('<a href="farmerStory_farmer_resume_1.html?id='+ Crops[i].id +'" class="infoLink col-md-6">\
              <div class="cropInfo">\
                <div class="col-md-4">\
                  <div class="tag nowOnSale">已上市</div>\
                  <div><img src="'+ Crops[i].get('cropImageUrl') +'" class="pic"></div>\
                  <div class="underPic"><span id="bookMarkNum"><i class="fa fa-star"></i> 0</span><span id="trackNum"><i class="fa fa-rss"></i> 0</span></div>\
                </div>\
                <div class="col-md-7">\
                  <div class="cropTitle"><b>'+ Crops[i].get('cropName') +'</b></div>\
                  <div class="underLine detail"><i class="fa fa-clock-o"></i>　'+ Crops[i].get('seedingTime') +'</div>\
                  <div class="underLine detail"><i class="fa fa-certificate"></i>　'+ Crops[i].get('feature') +'</div>\
                  <div class="detail"><i class="fa fa-bullhorn"></i>　'+ Crops[i].get('recentTitle')[0] +'<span class="recentDay">#天前</span></div>\
                </div>\
              </div>\
            </a>');
				} else {
					$('#home').append('<a href="farmerStory_farmer_resume_1.html?id='+ Crops[i].id +'" class="infoLink col-md-6">\
              <div class="cropInfo">\
                <div class="col-md-4">\
                  <div class="tag soldOut">已售完</div>\
                  <div><img src="'+ Crops[i].get('cropImageUrl') +'" class="pic"></div>\
                  <div class="underPic"><span id="bookMarkNum"><i class="fa fa-star"></i> 0</span><span id="trackNum"><i class="fa fa-rss"></i> 0</span></div>\
                </div>\
                <div class="col-md-7">\
                  <div class="cropTitle"><b>'+ Crops[i].get('cropName') +'</b></div>\
                  <div class="underLine detail"><i class="fa fa-clock-o"></i>　'+ Crops[i].get('seedingTime') +'</div>\
                  <div class="underLine detail"><i class="fa fa-certificate"></i>　'+ Crops[i].get('feature') +'</div>\
                  <div class="detail"><i class="fa fa-bullhorn"></i>　'+ Crops[i].get('recentTitle')[0] +'<span class="recentDay">#天前</span></div>\
                </div>\
              </div>\
            </a>');
					$('#menu3').append('<a href="farmerStory_farmer_resume_1.html?id='+ Crops[i].id +'" class="infoLink col-md-6">\
              <div class="cropInfo">\
                <div class="col-md-4">\
                  <div class="tag soldOut">已售完</div>\
                  <div><img src="'+ Crops[i].get('cropImageUrl') +'" class="pic"></div>\
                  <div class="underPic"><span id="bookMarkNum"><i class="fa fa-star"></i> 0</span><span id="trackNum"><i class="fa fa-rss"></i> 0</span></div>\
                </div>\
                <div class="col-md-7">\
                  <div class="cropTitle"><b>'+ Crops[i].get('cropName') +'</b></div>\
                  <div class="underLine detail"><i class="fa fa-clock-o"></i>　'+ Crops[i].get('seedingTime') +'</div>\
                  <div class="underLine detail"><i class="fa fa-certificate"></i>　'+ Crops[i].get('feature') +'</div>\
                  <div class="detail"><i class="fa fa-bullhorn"></i>　'+ Crops[i].get('recentTitle')[0] +'<span class="recentDay">#天前</span></div>\
                </div>\
              </div>\
            </a>');
				}
			}
		},
		error: function(error){
			alert("error: " + error.message);
		}
	});
}, getValue = function (varname) {
	var url = window.location.href;
 var qparts = url.split("?");
 if (qparts.length == 0){return "";}
 var query = qparts[1];
 var vars = query.split("&");
 var value = "";
 for (i=0; i<vars.length; i++)
 {
   var parts = vars[i].split("=");
   if (parts[0] == varname)
   {
     value = parts[1];
     break;
   }
 }
 value = decodeURI(value);
 value.replace(/\+/g," ");
 return value;
}, getCrop = function(id){
	var Crop = Parse.Object.extend("crop");
	var query = new Parse.Query(Crop);
	query.get(id, {
		success: function(crop){
			$('#diaryNum').text(crop.get("recentDate").length);
			$('#cropStatus').text(crop.get("cropStatus"));
			if(crop.get("cropStatus")==="未上市"){
				$('#cropStatus').addClass("notOnS");
			} else if(crop.get("cropStatus")==="已上市"){
				$('#cropStatus').addClass("nowOnSale");
			} else {
				$('#cropStatus').addClass("soldOut");
			}
			$('#navCropTitle').text(crop.get("cropName"));
			$('#cropPic').attr("src", crop.get("cropImageUrl"));
			$('#cropTitle').text(crop.get("cropName"));
			$('#seedingTime').text(crop.get("seedingTime"));
			$('#recent').text(crop.get("recentTitle")[0]);
			$('#feature').text(crop.get("feature"));
			$('#farmerName').text(crop.get("farmerName"));
			$('#place').text(crop.get("seedingPosition"));
			$('#sellingTime').text(crop.get("sellingTime"));
			for(var i=0; i<crop.get("recentDate").length; i++){
				$('#diary').append('<div class="row diary">\
    		<div class="col-md-2">\
    			<h3 id="recentTitle'+ i +'">'+ crop.get("recentTitle")[i] +'</h3>\
    			<p id="recentDate'+ i +'">'+ crop.get("recentDate")[i] +'</p>\
    		</div>\
    		<div class="col-md-7">\
    			<img src="'+ crop.get("recentImage")[i] +'" class="picBig" id="recentImage'+ i +'">\
    		</div>\
    	</div>');
			}
		},
		error: function(object, error){
			alert("Error: " + error.code + " " + error.message);
		}
	});
};

// var Crop = Parse.Object.extend("crop");
// var crop = new Crop();

// crop.set("cropImageUrl","http://files.parsetfss.com/f70de1d2-c7f7-46cd-a82d-eb80bd8db862/tfss-43bc3624-8a46-4823-a1e7-9a31bda99e3c-corn.jpg");
// crop.set("cropName","banana");
// crop.set("farmerName","spada");
// crop.set("feature","hahaha!");
// crop.set("seedingPosition","大仁樓");

// crop.save(null, {
// 	success: function(crop){
// 		alert('New object created with objectId: ' + crop.id);
// 	},
// 	error: function(crop, error){
// 		alert('Failed to create new object, with error code: ' + error.message);
// 	}
// });

$(function(){});
// crop.set("seedingTime","");
// crop.set("sellingTime");

