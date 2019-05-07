//imgLoader

// dynamically create loads of image cells
function cells(count) {
  //if (typeof count !== 'number' || count > 99) return false;
  
  var html = '',
      // déclaration d'une liste d'URLs
      images =['https://sssjv.github.io/suosikkiautoani/1.png', 'https://sssjv.github.io/suosikkiautoani/1.png', 'https://sssjv.github.io/suosikkiautoani/1.png', 'https://sssjv.github.io/suosikkiautoani/1.png'],
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
          '<p>'+'adsense'+'</p>'+
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
