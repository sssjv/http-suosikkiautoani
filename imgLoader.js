//imgLoader

// dynamically create loads of image cells
function cells(count) {
  //if (typeof count !== 'number' || count > 99) return false;
	
  var html = '',
      // déclaration d'une liste d'URLs
      images =['https://cdn.vox-cdn.com/thumbor/myT9EOeqv6-uH5Z3LYByziAvVfk=/0x0:2040x1360/1820x1213/filters:focal(857x517:1183x843):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/61809461/akrales_171120_2110_0212.0.jpg',
	       'https://techcrunch.com/wp-content/uploads/2018/06/L1160818-1.jpg?w=1390&crop=1', 
	       'https://www.extremetech.com/wp-content/uploads/2019/03/250104_Volvo_Cars_to_deploy_in-car_cameras_and_intervention_against_intoxication-640x354.jpg', 
	       'https://www.driving.co.uk/s3/st-driving-prod/uploads/2015/08/dvd-players-header.jpg',
	       'http://myufcw.org/files/2017/01/bluecars.jpg',
	       'https://www.sixt.co.uk/fileadmin/user_upload/ONM-3759_500x280_2-long-term-rental-discount.jpg',
	       'https://www.enterprise.ca/content/dam/ent-brand/replacement-rental-launchpad-review.jpg.wrend.480.270.jpeg',
	       'https://thenypost.files.wordpress.com/2019/01/car-rental.jpg?quality=90&strip=all&w=618&h=410&crop=1',
	       'https://steamcdn-a.akamaihd.net/steam/apps/516750/ss_56ac2d9cdb5bee76ba289b201ee8d182b560cbbb.1920x1080.jpg?t=1554875474',
	       'https://static-cdn.jtvnw.net/ttv-boxart/My%20Summer%20Car.jpg',
	       'https://www.amistech.com/msc/game/06.jpg',
	       'https://i.ytimg.com/vi/6SY5S2OT7HE/maxresdefault.jpg',
	       'https://www.enterprise.com/content/dam/ent-brand/GettyImages-453470317_1920x1080.jpg',
	       'https://www.mykonosrentacar.com/images/mykonos_rentacar_heroimage_3.jpg?crc=317217613',
	       'https://www.enterprise.com/content/dam/ent-brand/LOB/ENTERPRISE_02_SH_46_R97_78_2_1920x1080.jpg',
	       'https://www.almuftah.com/sites/default/files/styles/thumb_754x328/public/rent-a-car_1.png?itok=h3_RUKwx',
	       'https://i.kinja-img.com/gawker-media/image/upload/s--ilm4nWtv--/c_scale,f_auto,fl_progressive,q_80,w_800/cottvtp3b4p6x3yo3s9f.jpg',
	       'https://i2.wp.com/www.evildressmaker.com/wp-content/uploads/2011/07/bigwheels6.jpg',
	       'https://i0.wp.com/www.evildressmaker.com/wp-content/uploads/2011/07/bigwheels3.jpg?resize=450%2C633',
	       'https://i2.wp.com/www.evildressmaker.com/wp-content/uploads/2011/07/bigwheels2.jpg',
	       'https://i.ytimg.com/vi/He6F_McY5pc/maxresdefault.jpg',
	       'https://www.stonhambarns.co.uk/wp-content/uploads/american-car-show-2019-7.jpg',
	       'https://www.ellaslist.com.au/system/events/featured_images/000/011/339/original/data?1547525553',
	       'http://www.tattonpark.org.uk/CachedImage.axd?ImageName=%2Fimages%2Fevents%2Famerican-car-26.jpg&ImageWidth=700&ImageHeight=400',
	       'http://tommycarwash.com/blog/wp-content/uploads/2018/08/Tunnel-Overview-1024x576.jpg',
	       'https://images-na.ssl-images-amazon.com/images/I/71aYBuE4%2BhL._SL1000_.jpg',
	       'https://inoutcarwash.com/wp-content/uploads/2019/01/professional-car-wash.jpg',
	       'http://www.racewaywash.com/upload/att/99/99.jpg',
	       'https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/chevrolet-corvette-stingray.jpg?itok=p8IHD30y',
	       'https://i.ytimg.com/vi/YizPeVoFDCs/hqdefault.jpg',
	       'https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/honda-nsx_3.jpg?itok=9_BYmWF0',
	       'https://upload.wikimedia.org/wikipedia/commons/e/ef/Lotus_Elise_Sport_220%2C_Paris_Motor_Show_2018%2C_IMG_0277.jpg'],
      url,
      imageNum;
  
  for (i = 0; i < count; i++) {
    // génère un chiffre entre 0 et la taille de la liste
    imageNum = Math.floor(Math.random() * images.length);
	  
    // sélectionne l'élément généré dans la liste
    url = images[imageNum]
	  
    // crée le contenu html
    html += '<article class="image__cell is-collapsed">' +
	    '<div class="image--basic">' +
		    '<a href="#expand-jump-'+i+'">' +
		        '<img id="expand-jump-'+i+'" class="basic__img" src="'+ url +'" alt="'+ url +'" />' +
	      '</a>' +
	      '<div class="arrow--up"></>' +
	    '</div>' +
	    '<div class="image--expand">' +
          '<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script><script>(adsbygoogle = window.adsbygoogle || []).push({google_ad_client: "ca-pub-1888985435305538",enable_page_level_ads: true});</script>'+
          '<a target="blank" href="'+ url +'"><img class="image--large" src="'+ url +'" alt="'+ url +'" /></a>' +
          '<p>Source : '+'<a target="blank" href="'+ url +'">'+url+'</a>'+'</p>'+
      '</div>' +
	  '</article>';
  }
  return html;
}

//apend cells to grid
$('.image-grid').empty().html(cells(100));


//bind click events
var $cell = $('.image__cell');

$cell.find('.image--basic').click(function() {
  var $thisCell = $(this).closest('.image__cell');
  
  if ($thisCell.hasClass('is-collapsed')) {
    $cell.not($thisCell).removeClass('is-expanded').addClass('is-collapsed');
    $thisCell.removeClass('is-collapsed').addClass('is-expanded');
  } else {
    $thisCell.removeClass('is-expanded').addClass('is-collapsed');
  }
});

$cell.find('.expand__close').click(function(){
  
  var $thisCell = $(this).closest('.image__cell');
  
  $thisCell.removeClass('is-expanded').addClass('is-collapsed');
});
