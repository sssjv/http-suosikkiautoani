//imgLoader

// dynamically create loads of image cells
function cells(count) {
  //if (typeof count !== 'number' || count > 99) return false;
  
  var html = '',
      // déclaration d'une liste d'URLs
      images =['https://cdn.vox-cdn.com/thumbor/myT9EOeqv6-uH5Z3LYByziAvVfk=/0x0:2040x1360/1820x1213/filters:focal(857x517:1183x843):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/61809461/akrales_171120_2110_0212.0.jpg',
	       'https://techcrunch.com/wp-content/uploads/2018/06/L1160818-1.jpg?w=1390&crop=1', 
	       'https://www.extremetech.com/wp-content/uploads/2019/03/250104_Volvo_Cars_to_deploy_in-car_cameras_and_intervention_against_intoxication-640x354.jpg', 
	       'https://www.driving.co.uk/s3/st-driving-prod/uploads/2015/08/dvd-players-header.jpg'],
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
          '<p>'+'adsense'+'</p>'+
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
