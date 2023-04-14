jQuery(document).ready(function($){
	/*
function hideEmptyFields() {
  $('.mod-ld-form-field span').each(function() {
    const fieldValue = $(this).text().split(':')[1].trim();
    if (fieldValue === '') {
      $(this).parent().css('display', 'none');
    }
  });
}*/
	
	function hideEmptyFields() {
  $('.mod-ld-form-field span').each(function() {
    const fieldValue = $(this).text().split(':')[1].trim();
    const parentElement = $(this).parent();
    const previousHeading = parentElement.prev('.mod-ld-form-fieldd');

    if (fieldValue === '') {
	$(this).parent().css('display', 'none');
      parentElement.css('display', 'none');
      previousHeading.css('display', 'none');
    }
  });
}



	
	
    let dataset = []
    $.each($('.ld-quiz-progress-content-container p'),function(k,v){
        let quiz_id = jQuery(v).find('a.user_statistic').attr('data-quiz_id')
        let ref_id = $(v).find('a.user_statistic').attr('data-ref_id')
        dataset.push(ref_id)
        let btn = document.createElement('button')
        $(btn).html('Ajouter une Action')
        $(btn).attr('data-quiz_id',quiz_id)
        $(btn).attr('data-ref_id',ref_id)
        $(btn).addClass('mod-ld-add-cert')
        $(v).append(btn)
        let container = document.createElement('div')
        $(container).addClass('mod-ld-quiz_data_container')
        $(container).attr('data-ref_id',ref_id)
        $(v).append(container)
    })
    get_the_quiz_data(dataset).then(function(resp){
        console.log(resp)
        for (let i = 0; i < resp.length; i++) {
            const quiz_data = resp[i];
            if( quiz_data.mod_ld_quiz_is_submitted ) {
                // $('.ld-quiz-progress-content-container p').find(`button[data-ref_id="${quiz_data.ref_id}"]`).hide()
                let quiz = quiz_data.quiz ? quiz_data.quiz : ''
                let time = quiz_data.time ? quiz_data.time : ''
                let score = quiz_data.score ? quiz_data.score : ''
                let count = quiz_data.count ? quiz_data.count : ''
				/*
                let mod_ld_quiz_tutorat = quiz_data.mod_ld_quiz_tutorat ? quiz_data.mod_ld_quiz_tutorat : ''
                let mod_ld_quiz_form_int = quiz_data.mod_ld_quiz_form_int ? quiz_data.mod_ld_quiz_form_int : ''
                let mod_ld_quiz_form_ext = quiz_data.mod_ld_quiz_form_ext ? quiz_data.mod_ld_quiz_form_ext : ''
                let mod_ld_quiz_e_learning = quiz_data.mod_ld_quiz_e_learning ? quiz_data.mod_ld_quiz_e_learning : ''
                let mod_ld_quiz_autres = quiz_data.mod_ld_quiz_autres ? quiz_data.mod_ld_quiz_autres : ''
                let mod_ld_quiz_responsable = quiz_data.mod_ld_quiz_responsable ? quiz_data.mod_ld_quiz_responsable : ''
                let mod_ld_quiz_observation = quiz_data.mod_ld_quiz_observation ? quiz_data.mod_ld_quiz_observation : ''
	*/
				let mod_ld_quiz_formint_intitule = quiz_data.mod_ld_quiz_formint_intitule ? quiz_data.mod_ld_quiz_formint_intitule : ''
				let mod_ld_quiz_formint_datedeb = quiz_data.mod_ld_quiz_formint_datedeb ? quiz_data.mod_ld_quiz_formint_datedeb : ''
				let mod_ld_quiz_formint_datefin = quiz_data.mod_ld_quiz_formint_datefin ? quiz_data.mod_ld_quiz_formint_datefin : ''
				let mod_ld_quiz_formint_lieu = quiz_data.mod_ld_quiz_formint_lieu ? quiz_data.mod_ld_quiz_formint_lieu : ''
				let mod_ld_quiz_formint_tuteur = quiz_data.mod_ld_quiz_formint_tuteur ? quiz_data.mod_ld_quiz_formint_tuteur : ''
				let mod_ld_quiz_formint_service = quiz_data.mod_ld_quiz_formint_service ? quiz_data.mod_ld_quiz_formint_service : ''
				
				let mod_ld_quiz_formint1_intitule = quiz_data.mod_ld_quiz_formint1_intitule ? quiz_data.mod_ld_quiz_formint1_intitule : ''
				let mod_ld_quiz_formint1_datedeb = quiz_data.mod_ld_quiz_formint1_datedeb ? quiz_data.mod_ld_quiz_formint1_datedeb : ''
				let mod_ld_quiz_formint1_datefin = quiz_data.mod_ld_quiz_formint1_datefin ? quiz_data.mod_ld_quiz_formint1_datefin : ''
				let mod_ld_quiz_formint1_lieu = quiz_data.mod_ld_quiz_formint1_lieu ? quiz_data.mod_ld_quiz_formint1_lieu : ''
				let mod_ld_quiz_formint1_tuteur = quiz_data.mod_ld_quiz_formint1_tuteur ? quiz_data.mod_ld_quiz_formint1_tuteur : ''
				let mod_ld_quiz_formint1_service = quiz_data.mod_ld_quiz_formint1_service ? quiz_data.mod_ld_quiz_formint1_service : ''
				
				
				let mod_ld_quiz_formext_intitule = quiz_data.mod_ld_quiz_formext_intitule ? quiz_data.mod_ld_quiz_formext_intitule : ''
				let mod_ld_quiz_formext_datedeb = quiz_data.mod_ld_quiz_formext_datedeb ? quiz_data.mod_ld_quiz_formext_datedeb : ''
				let mod_ld_quiz_formext_datefin = quiz_data.mod_ld_quiz_formext_datefin ? quiz_data.mod_ld_quiz_formext_datefin : ''
				let mod_ld_quiz_formext_lieu = quiz_data.mod_ld_quiz_formext_lieu ? quiz_data.mod_ld_quiz_formext_lieu : ''
				let mod_ld_quiz_formext_tuteur = quiz_data.mod_ld_quiz_formext_tuteur ? quiz_data.mod_ld_quiz_formext_tuteur : ''
				let mod_ld_quiz_formext_service = quiz_data.mod_ld_quiz_formext_service ? quiz_data.mod_ld_quiz_formext_service : ''
				
				let mod_ld_quiz_formext1_intitule = quiz_data.mod_ld_quiz_formext1_intitule ? quiz_data.mod_ld_quiz_formext1_intitule : ''
				let mod_ld_quiz_formext1_datedeb = quiz_data.mod_ld_quiz_formext1_datedeb ? quiz_data.mod_ld_quiz_formext1_datedeb : ''
				let mod_ld_quiz_formext1_datefin = quiz_data.mod_ld_quiz_formext1_datefin ? quiz_data.mod_ld_quiz_formext1_datefin : ''
				let mod_ld_quiz_formext1_lieu = quiz_data.mod_ld_quiz_formext1_lieu ? quiz_data.mod_ld_quiz_formext1_lieu : ''
				let mod_ld_quiz_formext1_tuteur = quiz_data.mod_ld_quiz_formext1_tuteur ? quiz_data.mod_ld_quiz_formext1_tuteur : ''
				let mod_ld_quiz_formext1_service = quiz_data.mod_ld_quiz_formext1_service ? quiz_data.mod_ld_quiz_formext1_service : ''
				
				let mod_ld_quiz_tutorat_intitule = quiz_data.mod_ld_quiz_tutorat_intitule ? quiz_data.mod_ld_quiz_tutorat_intitule : ''
				let mod_ld_quiz_tutorat_datedeb = quiz_data.mod_ld_quiz_tutorat_datedeb ? quiz_data.mod_ld_quiz_tutorat_datedeb : ''
				let mod_ld_quiz_tutorat_datefin = quiz_data.mod_ld_quiz_tutorat_datefin ? quiz_data.mod_ld_quiz_tutorat_datefin : ''
				let mod_ld_quiz_tutorat_lieu = quiz_data.mod_ld_quiz_tutorat_lieu ? quiz_data.mod_ld_quiz_tutorat_lieu : ''
				let mod_ld_quiz_tutorat_tuteur = quiz_data.mod_ld_quiz_tutorat_tuteur ? quiz_data.mod_ld_quiz_tutorat_tuteur : ''
				let mod_ld_quiz_tutorat_service = quiz_data.mod_ld_quiz_tutorat_service ? quiz_data.mod_ld_quiz_tutorat_service : ''
				
				let mod_ld_quiz_tutorat1_intitule = quiz_data.mod_ld_quiz_tutorat1_intitule ? quiz_data.mod_ld_quiz_tutorat1_intitule : ''
				let mod_ld_quiz_tutorat1_datedeb = quiz_data.mod_ld_quiz_tutorat1_datedeb ? quiz_data.mod_ld_quiz_tutorat1_datedeb : ''
				let mod_ld_quiz_tutorat1_datefin = quiz_data.mod_ld_quiz_tutorat1_datefin ? quiz_data.mod_ld_quiz_tutorat1_datefin : ''
				let mod_ld_quiz_tutorat1_lieu = quiz_data.mod_ld_quiz_tutorat1_lieu ? quiz_data.mod_ld_quiz_tutorat1_lieu : ''
				let mod_ld_quiz_tutorat1_tuteur = quiz_data.mod_ld_quiz_tutorat1_tuteur ? quiz_data.mod_ld_quiz_tutorat1_tuteur : ''
				let mod_ld_quiz_tutorat1_service = quiz_data.mod_ld_quiz_tutorat1_service ? quiz_data.mod_ld_quiz_tutorat1_service : ''
				
				let mod_ld_quiz_e_learning_intitule = quiz_data.mod_ld_quiz_e_learning_intitule ? quiz_data.mod_ld_quiz_e_learning_intitule : ''
				let mod_ld_quiz_e_learning_datedeb = quiz_data.mod_ld_quiz_e_learning_datedeb ? quiz_data.mod_ld_quiz_e_learning_datedeb : ''
				let mod_ld_quiz_e_learning_datefin = quiz_data.mod_ld_quiz_e_learning_datefin ? quiz_data.mod_ld_quiz_e_learning_datefin : ''
				let mod_ld_quiz_e_learning_lieu = quiz_data.mod_ld_quiz_e_learning_lieu ? quiz_data.mod_ld_quiz_e_learning_lieu : ''
				let mod_ld_quiz_e_learning_tuteur = quiz_data.mod_ld_quiz_e_learning_tuteur ? quiz_data.mod_ld_quiz_e_learning_tuteur : ''
				let mod_ld_quiz_e_learning_service = quiz_data.mod_ld_quiz_e_learning_service ? quiz_data.mod_ld_quiz_e_learning_service : ''
				
					let mod_ld_quiz_e_learning1_intitule = quiz_data.mod_ld_quiz_e_learning1_intitule ? quiz_data.mod_ld_quiz_e_learning1_intitule : ''
				let mod_ld_quiz_e_learning1_datedeb = quiz_data.mod_ld_quiz_e_learning1_datedeb ? quiz_data.mod_ld_quiz_e_learning1_datedeb : ''
				let mod_ld_quiz_e_learning1_datefin = quiz_data.mod_ld_quiz_e_learning1_datefin ? quiz_data.mod_ld_quiz_e_learning1_datefin : ''
				let mod_ld_quiz_e_learning1_lieu = quiz_data.mod_ld_quiz_e_learning1_lieu ? quiz_data.mod_ld_quiz_e_learning1_lieu : ''
				let mod_ld_quiz_e_learning1_tuteur = quiz_data.mod_ld_quiz_e_learning1_tuteur ? quiz_data.mod_ld_quiz_e_learning1_tuteur : ''
				let mod_ld_quiz_e_learning1_service = quiz_data.mod_ld_quiz_e_learning1_service ? quiz_data.mod_ld_quiz_e_learning1_service : ''
				
                let html = `
                    <div class="mod-ld-popup-container mod-ld-popup-container-border">
												<div class="mod-ld-form-fieldd">
					<h3>Formation Interne</h3>
					</div>
					<div class="mod-ld-form-field">
                            <span>Intitulé:<br> ${mod_ld_quiz_formint_intitule}</span>
                        </div>
						<div class="mod-ld-form-field">
                            <span>Date de début:<br> ${mod_ld_quiz_formint_datedeb}</span>
                        </div>
						<div class="mod-ld-form-field">
                            <span>Date de fin:<br> ${mod_ld_quiz_formint_datefin}</span>
                        </div>
						<div class="mod-ld-form-field">
                            <span>Lieu:<br> ${mod_ld_quiz_formint_lieu}</span>
                        </div>
						<div class="mod-ld-form-field">
                            <span>Tuteur:<br> ${mod_ld_quiz_formint_tuteur}</span>
                        </div>
						<div class="mod-ld-form-field">
                            <span>Service/Organisme:<br> ${mod_ld_quiz_formint_service}</span>
                        </div>
						
								<div class="mod-ld-form-fieldd">
					<h3>Formation Interne 2</h3>
					</div>
					<div class="mod-ld-form-field">
                            <span>Intitulé:<br> ${mod_ld_quiz_formint1_intitule}</span>
                        </div>
						<div class="mod-ld-form-field">
                            <span>Date de début:<br> ${mod_ld_quiz_formint1_datedeb}</span>
                        </div>
						<div class="mod-ld-form-field">
                            <span>Date de fin:<br> ${mod_ld_quiz_formint1_datefin}</span>
                        </div>
						<div class="mod-ld-form-field">
                            <span>Lieu:<br> ${mod_ld_quiz_formint1_lieu}</span>
                        </div>
						<div class="mod-ld-form-field">
                            <span>Tuteur:<br> ${mod_ld_quiz_formint1_tuteur}</span>
                        </div>
						<div class="mod-ld-form-field">
                            <span>Service/Organisme:<br> ${mod_ld_quiz_formint1_service}</span>
                        </div>
						
						
						<div class="mod-ld-form-fieldd">
					
						<h3>Formation Externe</h3>
					</div>
					<div class="mod-ld-form-field">
                            <span>Intitulé:<br> ${mod_ld_quiz_formext_intitule}</span>
                        </div>
						<div class="mod-ld-form-field">
                            <span>Date de début:<br> ${mod_ld_quiz_formext_datedeb}</span>
                        </div>
						<div class="mod-ld-form-field">
                            <span>Date de fin:<br> ${mod_ld_quiz_formext_datefin}</span>
                        </div>
						<div class="mod-ld-form-field">
                            <span>Lieu:<br> ${mod_ld_quiz_formext_lieu}</span>
                        </div>
						<div class="mod-ld-form-field">
                            <span>Tuteur:<br> ${mod_ld_quiz_formext_tuteur}</span>
                        </div>
						<div class="mod-ld-form-field">
                            <span>Service/Organisme:<br> ${mod_ld_quiz_formext_service}</span>
                        </div>
						
						<div class="mod-ld-form-fieldd">
					
						<h3>Formation Externe 2</h3>
					</div>
					<div class="mod-ld-form-field">
                            <span>Intitulé:<br> ${mod_ld_quiz_formext1_intitule}</span>
                        </div>
						<div class="mod-ld-form-field">
                            <span>Date de début:<br> ${mod_ld_quiz_formext1_datedeb}</span>
                        </div>
						<div class="mod-ld-form-field">
                            <span>Date de fin:<br> ${mod_ld_quiz_formext1_datefin}</span>
                        </div>
						<div class="mod-ld-form-field">
                            <span>Lieu:<br> ${mod_ld_quiz_formext1_lieu}</span>
                        </div>
						<div class="mod-ld-form-field">
                            <span>Tuteur:<br> ${mod_ld_quiz_formext1_tuteur}</span>
                        </div>
						<div class="mod-ld-form-field">
                            <span>Service/Organisme:<br> ${mod_ld_quiz_formext1_service}</span>
                        </div>
						
						<div class="mod-ld-form-fieldd" >
							<h3>Tutorat</h3>
					</div>
					<div class="mod-ld-form-field">
                            <span>Intitulé:<br> ${mod_ld_quiz_tutorat_intitule}</span>
                        </div>
						<div class="mod-ld-form-field">
                            <span>Date de début:<br> ${mod_ld_quiz_tutorat_datedeb}</span>
                        </div>
						<div class="mod-ld-form-field">
                            <span>Date de fin:<br> ${mod_ld_quiz_tutorat_datefin}</span>
                        </div>
						<div class="mod-ld-form-field">
                            <span>Lieu:<br> ${mod_ld_quiz_tutorat_lieu}</span>
                        </div>
						<div class="mod-ld-form-field">
                            <span>Tuteur:<br> ${mod_ld_quiz_tutorat_tuteur}</span>
                        </div>
						<div class="mod-ld-form-field">
                            <span>Service/Organisme:<br> ${mod_ld_quiz_tutorat_service}</span>
                        </div>
						
						<div class="mod-ld-form-fieldd" >
							<h3>Tutorat 2</h3>
					</div>
					<div class="mod-ld-form-field">
                            <span>Intitulé:<br> ${mod_ld_quiz_tutorat1_intitule}</span>
                        </div>
						<div class="mod-ld-form-field">
                            <span>Date de début:<br> ${mod_ld_quiz_tutorat1_datedeb}</span>
                        </div>
						<div class="mod-ld-form-field">
                            <span>Date de fin:<br> ${mod_ld_quiz_tutorat1_datefin}</span>
                        </div>
						<div class="mod-ld-form-field">
                            <span>Lieu:<br> ${mod_ld_quiz_tutorat1_lieu}</span>
                        </div>
						<div class="mod-ld-form-field">
                            <span>Tuteur:<br> ${mod_ld_quiz_tutorat1_tuteur}</span>
                        </div>
						<div class="mod-ld-form-field">
                            <span>Service/Organisme:<br> ${mod_ld_quiz_tutorat1_service}</span>
                        </div>
						
						
						<div class="mod-ld-form-fieldd">
							<h3>E_learning</h3>
					</div>
					<div class="mod-ld-form-field">
                            <span>Intitulé:<br> ${mod_ld_quiz_e_learning_intitule}</span>
                        </div>
						<div class="mod-ld-form-field">
                            <span>Date de début:<br> ${mod_ld_quiz_e_learning_datedeb}</span>
                        </div>
						<div class="mod-ld-form-field">
                            <span>Date de fin:<br> ${mod_ld_quiz_e_learning_datefin}</span>
                        </div>
						<div class="mod-ld-form-field">
                            <span>Lieu:<br> ${mod_ld_quiz_e_learning_lieu}</span>
                        </div>
						<div class="mod-ld-form-field">
                            <span>Tuteur:<br> ${mod_ld_quiz_e_learning_tuteur}</span>
                        </div>
						<div class="mod-ld-form-field">
                            <span>Service/Organisme:<br> ${mod_ld_quiz_e_learning_service}</span>
                        </div>
						
						<div class="mod-ld-form-fieldd">
							<h3>E_learning 2</h3>
					</div>
					<div class="mod-ld-form-field">
                            <span>Intitulé:<br> ${mod_ld_quiz_e_learning1_intitule}</span>
                        </div>
						<div class="mod-ld-form-field">
                            <span>Date de début:<br> ${mod_ld_quiz_e_learning1_datedeb}</span>
                        </div>
						<div class="mod-ld-form-field">
                            <span>Date de fin:<br> ${mod_ld_quiz_e_learning1_datefin}</span>
                        </div>
						<div class="mod-ld-form-field">
                            <span>Lieu:<br> ${mod_ld_quiz_e_learning1_lieu}</span>
                        </div>
						<div class="mod-ld-form-field">
                            <span>Tuteur:<br> ${mod_ld_quiz_e_learning1_tuteur}</span>
                        </div>
						<div class="mod-ld-form-field">
                            <span>Service/Organisme:<br> ${mod_ld_quiz_e_learning1_service}</span>
                        </div>
						
						</div>
                    </div>
                `
				
                if( $('.ld-quiz-progress-content-container p').find(`div[data-ref_id="${quiz_data.ref_id}"] .mod-ld-popup-container`).length == 0 ) {
                    $('.ld-quiz-progress-content-container p').find(`div[data-ref_id="${quiz_data.ref_id}"]`).append(html)
                }
				hideEmptyFields();
            }
        }
    }).catch(function(err){
        console.log(err)
    })
    function get_the_quiz_data(dataset){
        return new Promise(function(resolve,reject){
            $.ajax({
                url: mod_ld.ajax_url,
                type: 'POST',
                dataType: 'JSON',
                data: {
                    action: "get_the_all_quiz_data",
                    dataset: dataset
                },
                success:function(resp){
                    resolve(resp)
                },
                error:function(err){
                    reject(err)
                }
            })
        })
    }
    $('.mod-ld-add-cert').on('click',function(e){
        e.preventDefault()
        let ref_id = $(this).data('ref_id')
        let quiz_id = $(this).data('quiz_id')
        console.log(ref_id)
        this_el = $(this)
        this_text = $(this).html()
        this_el.html(`<i class="fas fa-spinner fa-spin"></i> ${this_text}`)
        $.ajax({
            url: mod_ld.ajax_url,
            type: 'POST',
            dataType: 'JSON',
            data: {
                action: "get_the_quiz_data",
                dataset: ref_id
            },
            success:function(resp){
                console.log(resp)
                this_el.html(this_text)
                let quiz = resp.quiz ? resp.quiz : ''
                let time = resp.time ? resp.time : ''
                let score = resp.score ? resp.score : ''
                let count = resp.count ? resp.count : ''
				/*
                let mod_ld_quiz_tutorat = resp.mod_ld_quiz_tutorat ? resp.mod_ld_quiz_tutorat : ''
                let mod_ld_quiz_form_int = resp.mod_ld_quiz_form_int ? resp.mod_ld_quiz_form_int : ''
                let mod_ld_quiz_form_ext = resp.mod_ld_quiz_form_ext ? resp.mod_ld_quiz_form_ext : ''
                let mod_ld_quiz_e_learning = resp.mod_ld_quiz_e_learning ? resp.mod_ld_quiz_e_learning : ''
                let mod_ld_quiz_autres = resp.mod_ld_quiz_autres ? resp.mod_ld_quiz_autres : ''
                let mod_ld_quiz_responsable = resp.mod_ld_quiz_responsable ? resp.mod_ld_quiz_responsable : ''
                let mod_ld_quiz_observation = resp.mod_ld_quiz_observation ? resp.mod_ld_quiz_observation : ''
				*/
				          
                let mod_ld_quiz_formint_intitule = resp.mod_ld_quiz_formint_intitule ? resp.mod_ld_quiz_formint_intitule : ''
				let mod_ld_quiz_formint_datedeb = resp.mod_ld_quiz_formint_datedeb ? resp.mod_ld_quiz_formint_datedeb : ''
				let mod_ld_quiz_formint_datefin = resp.mod_ld_quiz_formint_datefin ? resp.mod_ld_quiz_formint_datefin : ''
				let mod_ld_quiz_formint_lieu = resp.mod_ld_quiz_formint_lieu ? resp.mod_ld_quiz_formint_lieu : ''
				let mod_ld_quiz_formint_tuteur = resp.mod_ld_quiz_formint_tuteur ? resp.mod_ld_quiz_formint_tuteur : ''
				let mod_ld_quiz_formint_service = resp.mod_ld_quiz_formint_service ? resp.mod_ld_quiz_formint_service : ''
				
				     let mod_ld_quiz_formint1_intitule = resp.mod_ld_quiz_formint1_intitule ? resp.mod_ld_quiz_formint1_intitule : ''
				let mod_ld_quiz_formint1_datedeb = resp.mod_ld_quiz_formint1_datedeb ? resp.mod_ld_quiz_formint1_datedeb : ''
				let mod_ld_quiz_formint1_datefin = resp.mod_ld_quiz_formint1_datefin ? resp.mod_ld_quiz_formint1_datefin : ''
				let mod_ld_quiz_formint1_lieu = resp.mod_ld_quiz_formint1_lieu ? resp.mod_ld_quiz_formint1_lieu : ''
				let mod_ld_quiz_formint1_tuteur = resp.mod_ld_quiz_formint1_tuteur ? resp.mod_ld_quiz_formint1_tuteur : ''
				let mod_ld_quiz_formint1_service = resp.mod_ld_quiz_formint1_service ? resp.mod_ld_quiz_formint1_service : ''
				
				
				  let mod_ld_quiz_formext_intitule = resp.mod_ld_quiz_formext_intitule ? resp.mod_ld_quiz_formext_intitule : ''
                  let mod_ld_quiz_formext_datedeb = resp.mod_ld_quiz_formext_datedeb ? resp.mod_ld_quiz_formext_datedeb : ''
                  let mod_ld_quiz_formext_datefin = resp.mod_ld_quiz_formext_datefin ? resp.mod_ld_quiz_formext_datefin : ''
                  let mod_ld_quiz_formext_lieu = resp.mod_ld_quiz_formext_lieu ? resp.mod_ld_quiz_formext_lieu : ''
                  let mod_ld_quiz_formext_tuteur = resp.mod_ld_quiz_formext_tuteur ? resp.mod_ld_quiz_formext_tuteur : ''
                  let mod_ld_quiz_formext_service = resp.mod_ld_quiz_formext_service ? resp.mod_ld_quiz_formext_service : ''
				  
				    let mod_ld_quiz_formext1_intitule = resp.mod_ld_quiz_formext1_intitule ? resp.mod_ld_quiz_formext1_intitule : ''
                  let mod_ld_quiz_formext1_datedeb = resp.mod_ld_quiz_formext1_datedeb ? resp.mod_ld_quiz_formext1_datedeb : ''
                  let mod_ld_quiz_formext1_datefin = resp.mod_ld_quiz_formext1_datefin ? resp.mod_ld_quiz_formext1_datefin : ''
                  let mod_ld_quiz_formext1_lieu = resp.mod_ld_quiz_formext1_lieu ? resp.mod_ld_quiz_formext1_lieu : ''
                  let mod_ld_quiz_formext1_tuteur = resp.mod_ld_quiz_formext1_tuteur ? resp.mod_ld_quiz_formext1_tuteur : ''
                  let mod_ld_quiz_formext1_service = resp.mod_ld_quiz_formext1_service ? resp.mod_ld_quiz_formext1_service : ''
				  
				  
				  
				  			  let mod_ld_quiz_tutorat_intitule = resp.mod_ld_quiz_tutorat_intitule ? resp.mod_ld_quiz_tutorat_intitule : ''
                  let mod_ld_quiz_tutorat_datedeb = resp.mod_ld_quiz_tutorat_datedeb ? resp.mod_ld_quiz_tutorat_datedeb : ''
                  let mod_ld_quiz_tutorat_datefin = resp.mod_ld_quiz_tutorat_datefin ? resp.mod_ld_quiz_tutorat_datefin : ''
                  let mod_ld_quiz_tutorat_lieu = resp.mod_ld_quiz_tutorat_lieu ? resp.mod_ld_quiz_tutorat_lieu : ''
                  let mod_ld_quiz_tutorat_tuteur = resp.mod_ld_quiz_tutorat_tuteur ? resp.mod_ld_quiz_tutorat_tuteur : ''
                  let mod_ld_quiz_tutorat_service = resp.mod_ld_quiz_tutorat_service ? resp.mod_ld_quiz_tutorat_service : ''
				  
				   let mod_ld_quiz_tutorat1_intitule = resp.mod_ld_quiz_tutorat1_intitule ? resp.mod_ld_quiz_tutorat1_intitule : ''
                  let mod_ld_quiz_tutorat1_datedeb = resp.mod_ld_quiz_tutorat1_datedeb ? resp.mod_ld_quiz_tutorat1_datedeb : ''
                  let mod_ld_quiz_tutorat1_datefin = resp.mod_ld_quiz_tutorat1_datefin ? resp.mod_ld_quiz_tutorat1_datefin : ''
                  let mod_ld_quiz_tutorat1_lieu = resp.mod_ld_quiz_tutorat1_lieu ? resp.mod_ld_quiz_tutorat1_lieu : ''
                  let mod_ld_quiz_tutorat1_tuteur = resp.mod_ld_quiz_tutorat1_tuteur ? resp.mod_ld_quiz_tutorat1_tuteur : ''
                  let mod_ld_quiz_tutorat1_service = resp.mod_ld_quiz_tutorat1_service ? resp.mod_ld_quiz_tutorat1_service : ''
				  
				  			  let mod_ld_quiz_e_learning_intitule = resp.mod_ld_quiz_e_learning_intitule ? resp.mod_ld_quiz_e_learning_intitule : ''
                  let mod_ld_quiz_e_learning_datedeb = resp.mod_ld_quiz_e_learning_datedeb ? resp.mod_ld_quiz_e_learning_datedeb : ''
                  let mod_ld_quiz_e_learning_datefin = resp.mod_ld_quiz_e_learning_datefin ? resp.mod_ld_quiz_e_learning_datefin : ''
                  let mod_ld_quiz_e_learning_lieu = resp.mod_ld_quiz_e_learning_lieu ? resp.mod_ld_quiz_e_learning_lieu : ''
                  let mod_ld_quiz_e_learning_tuteur = resp.mod_ld_quiz_e_learning_tuteur ? resp.mod_ld_quiz_e_learning_tuteur : ''
                  let mod_ld_quiz_e_learning_service = resp.mod_ld_quiz_e_learning_service ? resp.mod_ld_quiz_e_learning_service : ''
				  
				  let mod_ld_quiz_e_learning1_intitule = resp.mod_ld_quiz_e_learning1_intitule ? resp.mod_ld_quiz_e_learning1_intitule : ''
                  let mod_ld_quiz_e_learning1_datedeb = resp.mod_ld_quiz_e_learning1_datedeb ? resp.mod_ld_quiz_e_learning1_datedeb : ''
                  let mod_ld_quiz_e_learning1_datefin = resp.mod_ld_quiz_e_learning1_datefin ? resp.mod_ld_quiz_e_learning1_datefin : ''
                  let mod_ld_quiz_e_learning1_lieu = resp.mod_ld_quiz_e_learning1_lieu ? resp.mod_ld_quiz_e_learning1_lieu : ''
                  let mod_ld_quiz_e_learning1_tuteur = resp.mod_ld_quiz_e_learning1_tuteur ? resp.mod_ld_quiz_e_learning1_tuteur : ''
                  let mod_ld_quiz_e_learning1_service = resp.mod_ld_quiz_e_learning1_service ? resp.mod_ld_quiz_e_learning1_service : ''

				/*let mod_ld_quiz_tutorat_intitule = resp.mod_ld_quiz_tutorat_intitule ? resp.mod_ld_quiz_tutorat_intitule : ''
let mod_ld_quiz_tutorat_datedeb = resp.mod_ld_quiz_tutorat_datedeb ? resp.mod_ld_quiz_tutorat_datedeb : ''
let mod_ld_quiz_tutorat_datefin = resp.mod_ld_quiz_tutorat_datefin ? resp.mod_ld_quiz_tutorat_datefin : ''
let mod_ld_quiz_tutorat_lieu = resp.mod_ld_quiz_tutorat_lieu ? resp.mod_ld_quiz_tutorat_lieu : ''
let mod_ld_quiz_tutorat_tuteur = resp.mod_ld_quiz_tutorat_tuteur ? resp.mod_ld_quiz_tutorat_tuteur : ''
let mod_ld_quiz_tutorat_service = resp.mod_ld_quiz_tutorat_service ? resp.mod_ld_quiz_tutorat_service : ''*/
				/*let mod_ld_quiz_learning_intitule = resp.mod_ld_quiz_learning_intitule ? resp.mod_ld_quiz_learning_intitule : ''
let mod_ld_quiz_learning_datedeb = resp.mod_ld_quiz_learning_datedeb ? resp.mod_ld_quiz_learning_datedeb : ''
let mod_ld_quiz_learning_datefin = resp.mod_ld_quiz_learning_datefin ? resp.mod_ld_quiz_learning_datefin : ''
let mod_ld_quiz_learning_lieu = resp.mod_ld_quiz_learning_lieu ? resp.mod_ld_quiz_learning_lieu : ''
let mod_ld_quiz_learning_tuteur = resp.mod_ld_quiz_learning_tuteur ? resp.mod_ld_quiz_learning_tuteur : ''
let mod_ld_quiz_learning_service = resp.mod_ld_quiz_learning_service ? resp.mod_ld_quiz_learning_service : ''*/
				
				
                let is_disabled = resp.mod_ld_quiz_is_submitted && !mod_ld.is_admin ? 'disabled' : ''
                is_disabled = ''
                let html = `
                    <div class="mod-ld-popup-container" id="action_form">
						<div class="mod-ld-form-fieldd">
                            <h3>Formation Interne</h3>
                        </div>
						<div class="mod-ld-form-field">
                            <label>Intitule</label>
                            <input ${is_disabled} type="text" id="mod_ld_quiz_formint_intitule" value="${mod_ld_quiz_formint_intitule}"/>
                        </div>
						<div class="mod-ld-form-field">
                            <label>Date de debut</label>
                            <input ${is_disabled} type="text" id="mod_ld_quiz_formint_datedeb" value="${mod_ld_quiz_formint_datedeb}"/>
                        </div>
						<div class="mod-ld-form-field">
                            <label>Date de fin</label>
                            <input ${is_disabled} type="text" id="mod_ld_quiz_formint_datefin" value="${mod_ld_quiz_formint_datefin}"/>
                        </div>
						<div class="mod-ld-form-field">
                            <label>Lieu</label>
                            <input ${is_disabled} type="text" id="mod_ld_quiz_formint_lieu" value="${mod_ld_quiz_formint_lieu}"/>
                        </div>
						<div class="mod-ld-form-field">
                            <label>Tuteur</label>
                            <input ${is_disabled} type="text" id="mod_ld_quiz_formint_tuteur" value="${mod_ld_quiz_formint_tuteur}"/>
                        </div>
						<div class="mod-ld-form-field">
                            <label>Service / Organisme</label>
                            <input ${is_disabled} type="text" id="mod_ld_quiz_formint_service" value="${mod_ld_quiz_formint_service}"/>
                        </div>
						
					
						<div class="mod-ld-form-fieldd">
                            <h3>Formation Interne 2</h3>
                        </div>
						<div class="mod-ld-form-field">
                            <label>Intitule</label>
                            <input ${is_disabled} type="text" id="mod_ld_quiz_formint1_intitule" value="${mod_ld_quiz_formint1_intitule}"/>
                        </div>
						<div class="mod-ld-form-field">
                            <label>Date de debut</label>
                            <input ${is_disabled} type="text" id="mod_ld_quiz_formint1_datedeb" value="${mod_ld_quiz_formint1_datedeb}"/>
                        </div>
						<div class="mod-ld-form-field">
                            <label>Date de fin</label>
                            <input ${is_disabled} type="text" id="mod_ld_quiz_formint1_datefin" value="${mod_ld_quiz_formint1_datefin}"/>
                        </div>
						<div class="mod-ld-form-field">
                            <label>Lieu</label>
                            <input ${is_disabled} type="text" id="mod_ld_quiz_formint1_lieu" value="${mod_ld_quiz_formint1_lieu}"/>
                        </div>
						<div class="mod-ld-form-field">
                            <label>Tuteur</label>
                            <input ${is_disabled} type="text" id="mod_ld_quiz_formint1_tuteur" value="${mod_ld_quiz_formint1_tuteur}"/>
                        </div>
						<div class="mod-ld-form-field">
                            <label>Service / Organisme</label>
                            <input ${is_disabled} type="text" id="mod_ld_quiz_formint1_service" value="${mod_ld_quiz_formint1_service}"/>
                        </div>
						
						
						<div class="mod-ld-form-fieldd">
                            <h3>Formation Externe</h3>
                        </div>
						<div class="mod-ld-form-field">
                            <label>Intitule</label>
                            <input ${is_disabled} type="text" id="mod_ld_quiz_formext_intitule" value="${mod_ld_quiz_formext_intitule}"/>
                        </div>
						<div class="mod-ld-form-field">
                            <label>Date de debut</label>
                            <input ${is_disabled} type="text" id="mod_ld_quiz_formext_datedeb" value="${mod_ld_quiz_formext_datedeb}"/>
                        </div>
						<div class="mod-ld-form-field">
                            <label>Date de fin</label>
                            <input ${is_disabled} type="text" id="mod_ld_quiz_formext_datefin" value="${mod_ld_quiz_formext_datefin}"/>
                        </div>
						<div class="mod-ld-form-field">
                            <label>Lieu</label>
                            <input ${is_disabled} type="text" id="mod_ld_quiz_formext_lieu" value="${mod_ld_quiz_formext_lieu}"/>
                        </div>
						<div class="mod-ld-form-field">
                            <label>Tuteur</label>
                            <input ${is_disabled} type="text" id="mod_ld_quiz_formext_tuteur" value="${mod_ld_quiz_formext_tuteur}"/>
                        </div>
						<div class="mod-ld-form-field">
                            <label>Service / Organisme</label>
                            <input ${is_disabled} type="text" id="mod_ld_quiz_formext_service" value="${mod_ld_quiz_formext_service}"/>
                        </div>
						
						<div class="mod-ld-form-fieldd">
                            <h3>Formation Externe 2</h3>
                        </div>
						<div class="mod-ld-form-field">
                            <label>Intitule</label>
                            <input ${is_disabled} type="text" id="mod_ld_quiz_formext1_intitule" value="${mod_ld_quiz_formext1_intitule}"/>
                        </div>
						<div class="mod-ld-form-field">
                            <label>Date de debut</label>
                            <input ${is_disabled} type="text" id="mod_ld_quiz_formext1_datedeb" value="${mod_ld_quiz_formext1_datedeb}"/>
                        </div>
						<div class="mod-ld-form-field">
                            <label>Date de fin</label>
                            <input ${is_disabled} type="text" id="mod_ld_quiz_formext1_datefin" value="${mod_ld_quiz_formext1_datefin}"/>
                        </div>
						<div class="mod-ld-form-field">
                            <label>Lieu</label>
                            <input ${is_disabled} type="text" id="mod_ld_quiz_formext1_lieu" value="${mod_ld_quiz_formext1_lieu}"/>
                        </div>
						<div class="mod-ld-form-field">
                            <label>Tuteur</label>
                            <input ${is_disabled} type="text" id="mod_ld_quiz_formext1_tuteur" value="${mod_ld_quiz_formext1_tuteur}"/>
                        </div>
						<div class="mod-ld-form-field">
                            <label>Service / Organisme</label>
                            <input ${is_disabled} type="text" id="mod_ld_quiz_formext1_service" value="${mod_ld_quiz_formext1_service}"/>
                        </div>
						
						
						<div class="mod-ld-form-fieldd">
                            <h3>Tutorat</h3>
                        </div>
						<div class="mod-ld-form-field">
                            <label>Intitule</label>
                            <input ${is_disabled} type="text" id="mod_ld_quiz_tutorat_intitule" value="${mod_ld_quiz_tutorat_intitule}"/>
                        </div>
						<div class="mod-ld-form-field">
                            <label>Date de debut</label>
                            <input ${is_disabled} type="text" id="mod_ld_quiz_tutorat_datedeb" value="${mod_ld_quiz_tutorat_datedeb}"/>
                        </div>
						<div class="mod-ld-form-field">
                            <label>Date de fin</label>
                            <input ${is_disabled} type="text" id="mod_ld_quiz_tutorat_datefin" value="${mod_ld_quiz_tutorat_datefin}"/>
                        </div>
						<div class="mod-ld-form-field">
                            <label>Lieu</label>
                            <input ${is_disabled} type="text" id="mod_ld_quiz_tutorat_lieu" value="${mod_ld_quiz_tutorat_lieu}"/>
                        </div>
						<div class="mod-ld-form-field">
                            <label>Tuteur</label>
                            <input ${is_disabled} type="text" id="mod_ld_quiz_tutorat_tuteur" value="${mod_ld_quiz_tutorat_tuteur}"/>
                        </div>
						<div class="mod-ld-form-field">
                            <label>Service / Organisme</label>
                            <input ${is_disabled} type="text" id="mod_ld_quiz_tutorat_service" value="${mod_ld_quiz_tutorat_service}"/>
                        </div>
						
						<div class="mod-ld-form-fieldd">
                            <h3>Tutorat 2</h3>
                        </div>
						<div class="mod-ld-form-field">
                            <label>Intitule</label>
                            <input ${is_disabled} type="text" id="mod_ld_quiz_tutorat1_intitule" value="${mod_ld_quiz_tutorat1_intitule}"/>
                        </div>
						<div class="mod-ld-form-field">
                            <label>Date de debut</label>
                            <input ${is_disabled} type="text" id="mod_ld_quiz_tutorat1_datedeb" value="${mod_ld_quiz_tutorat1_datedeb}"/>
                        </div>
						<div class="mod-ld-form-field">
                            <label>Date de fin</label>
                            <input ${is_disabled} type="text" id="mod_ld_quiz_tutorat1_datefin" value="${mod_ld_quiz_tutorat1_datefin}"/>
                        </div>
						<div class="mod-ld-form-field">
                            <label>Lieu</label>
                            <input ${is_disabled} type="text" id="mod_ld_quiz_tutorat1_lieu" value="${mod_ld_quiz_tutorat1_lieu}"/>
                        </div>
						<div class="mod-ld-form-field">
                            <label>Tuteur</label>
                            <input ${is_disabled} type="text" id="mod_ld_quiz_tutorat1_tuteur" value="${mod_ld_quiz_tutorat1_tuteur}"/>
                        </div>
						<div class="mod-ld-form-field">
                            <label>Service / Organisme</label>
                            <input ${is_disabled} type="text" id="mod_ld_quiz_tutorat1_service" value="${mod_ld_quiz_tutorat1_service}"/>
                        </div>
						
						<div class="mod-ld-form-fieldd">
                            <h3>E_learning</h3>
                        </div>
						<div class="mod-ld-form-field">
                            <label>Intitule</label>
                            <input ${is_disabled} type="text" id="mod_ld_quiz_e_learning_intitule" value="${mod_ld_quiz_e_learning_intitule}"/>
                        </div>
						<div class="mod-ld-form-field">
                            <label>Date de debut</label>
                            <input ${is_disabled} type="text" id="mod_ld_quiz_e_learning_datedeb" value="${mod_ld_quiz_e_learning_datedeb}"/>
                        </div>
						<div class="mod-ld-form-field">
                            <label>Date de fin</label>
                            <input ${is_disabled} type="text" id="mod_ld_quiz_e_learning_datefin" value="${mod_ld_quiz_e_learning_datefin}"/>
                        </div>
						<div class="mod-ld-form-field">
                            <label>Lieu</label>
                            <input ${is_disabled} type="text" id="mod_ld_quiz_e_learning_lieu" value="${mod_ld_quiz_e_learning_lieu}"/>
                        </div>
						<div class="mod-ld-form-field">
                            <label>Tuteur</label>
                            <input ${is_disabled} type="text" id="mod_ld_quiz_e_learning_tuteur" value="${mod_ld_quiz_e_learning_tuteur}"/>
                        </div>
						<div class="mod-ld-form-field">
                            <label>Service / Organisme</label>
                            <input ${is_disabled} type="text" id="mod_ld_quiz_e_learning_service" value="${mod_ld_quiz_e_learning_service}"/>
                        </div>
						
						
							<div class="mod-ld-form-fieldd">
                            <h3>E_learning 2</h3>
                        </div>
						<div class="mod-ld-form-field">
                            <label>Intitule</label>
                            <input ${is_disabled} type="text" id="mod_ld_quiz_e_learning1_intitule" value="${mod_ld_quiz_e_learning1_intitule}"/>
                        </div>
						<div class="mod-ld-form-field">
                            <label>Date de debut</label>
                            <input ${is_disabled} type="text" id="mod_ld_quiz_e_learning1_datedeb" value="${mod_ld_quiz_e_learning1_datedeb}"/>
                        </div>
						<div class="mod-ld-form-field">
                            <label>Date de fin</label>
                            <input ${is_disabled} type="text" id="mod_ld_quiz_e_learning1_datefin" value="${mod_ld_quiz_e_learning1_datefin}"/>
                        </div>
						<div class="mod-ld-form-field">
                            <label>Lieu</label>
                            <input ${is_disabled} type="text" id="mod_ld_quiz_e_learning1_lieu" value="${mod_ld_quiz_e_learning1_lieu}"/>
                        </div>
						<div class="mod-ld-form-field">
                            <label>Tuteur</label>
                            <input ${is_disabled} type="text" id="mod_ld_quiz_e_learning1_tuteur" value="${mod_ld_quiz_e_learning1_tuteur}"/>
                        </div>
						<div class="mod-ld-form-field">
                            <label>Service / Organisme</label>
                            <input ${is_disabled} type="text" id="mod_ld_quiz_e_learning1_service" value="${mod_ld_quiz_e_learning1_service}"/>
                        </div>
                    </div>
                `
                let swal_obj = {
                    html: html,
                    confirmButtonText: "Submit",
                    allowOutsideClick: false,
                    showLoaderOnConfirm: true,
                    confirmed: function(resp){
                        console.log(resp)
                    },
                    preConfirm: function(){
                        let dataset = {
                            ref_id: ref_id,
                            /*mod_ld_quiz_tutorat: $('#mod_ld_quiz_tutorat').val(),
                            mod_ld_quiz_form_int: $('#mod_ld_quiz_form_int').val(),
                            mod_ld_quiz_form_ext: $('#mod_ld_quiz_form_ext').val(),
                            mod_ld_quiz_e_learning: $('#mod_ld_quiz_e_learning').val(),
                            mod_ld_quiz_autres: $('#mod_ld_quiz_autres').val(),
                            mod_ld_quiz_responsable: $('#mod_ld_quiz_responsable').val(),
                            mod_ld_quiz_observation: $('#mod_ld_quiz_observation').val(),*/
							mod_ld_quiz_formint_intitule: $('#mod_ld_quiz_formint_intitule').val(),
                            mod_ld_quiz_formint_datedeb: $('#mod_ld_quiz_formint_datedeb').val(),
                            mod_ld_quiz_formint_datefin: $('#mod_ld_quiz_formint_datefin').val(),
                            mod_ld_quiz_formint_lieu: $('#mod_ld_quiz_formint_lieu').val(),
                            mod_ld_quiz_formint_tuteur: $('#mod_ld_quiz_formint_tuteur').val(),
                            mod_ld_quiz_formint_service: $('#mod_ld_quiz_formint_service').val(),
							mod_ld_quiz_formext_intitule: $('#mod_ld_quiz_formext_intitule').val(),
                            mod_ld_quiz_formext_datedeb: $('#mod_ld_quiz_formext_datedeb').val(),
                            mod_ld_quiz_formext_datefin: $('#mod_ld_quiz_formext_datefin').val(),
                            mod_ld_quiz_formext_lieu: $('#mod_ld_quiz_formext_lieu').val(),
                            mod_ld_quiz_formext_tuteur: $('#mod_ld_quiz_formext_tuteur').val(),
                            mod_ld_quiz_formext_service: $('#mod_ld_quiz_formext_service').val(),
							mod_ld_quiz_tutorat_intitule: $('#mod_ld_quiz_tutorat_intitule').val(),
                            mod_ld_quiz_tutorat_datedeb: $('#mod_ld_quiz_tutorat_datedeb').val(),
                            mod_ld_quiz_tutorat_datefin: $('#mod_ld_quiz_tutorat_datefin').val(),
                            mod_ld_quiz_tutorat_lieu: $('#mod_ld_quiz_tutorat_lieu').val(),
                            mod_ld_quiz_tutorat_tuteur: $('#mod_ld_quiz_tutorat_tuteur').val(),
                            mod_ld_quiz_tutorat_service: $('#mod_ld_quiz_tutorat_service').val(),
							mod_ld_quiz_e_learning_intitule: $('#mod_ld_quiz_e_learning_intitule').val(),
                            mod_ld_quiz_e_learning_datedeb: $('#mod_ld_quiz_e_learning_datedeb').val(),
                            mod_ld_quiz_e_learning_datefin: $('#mod_ld_quiz_e_learning_datefin').val(),
                            mod_ld_quiz_e_learning_lieu: $('#mod_ld_quiz_e_learning_lieu').val(),
                            mod_ld_quiz_e_learning_tuteur: $('#mod_ld_quiz_e_learning_tuteur').val(),
                            mod_ld_quiz_e_learning_service: $('#mod_ld_quiz_e_learning_service').val(),
									mod_ld_quiz_formint1_intitule: $('#mod_ld_quiz_formint1_intitule').val(),
                            mod_ld_quiz_formint1_datedeb: $('#mod_ld_quiz_formint1_datedeb').val(),
                            mod_ld_quiz_formint1_datefin: $('#mod_ld_quiz_formint1_datefin').val(),
                            mod_ld_quiz_formint1_lieu: $('#mod_ld_quiz_formint1_lieu').val(),
                            mod_ld_quiz_formint1_tuteur: $('#mod_ld_quiz_formint1_tuteur').val(),
                            mod_ld_quiz_formint1_service: $('#mod_ld_quiz_formint1_service').val(),
							mod_ld_quiz_formext1_intitule: $('#mod_ld_quiz_formext1_intitule').val(),
                            mod_ld_quiz_formext1_datedeb: $('#mod_ld_quiz_formext1_datedeb').val(),
                            mod_ld_quiz_formext1_datefin: $('#mod_ld_quiz_formext1_datefin').val(),
                            mod_ld_quiz_formext1_lieu: $('#mod_ld_quiz_formext1_lieu').val(),
                            mod_ld_quiz_formext1_tuteur: $('#mod_ld_quiz_formext1_tuteur').val(),
                            mod_ld_quiz_formext1_service: $('#mod_ld_quiz_formext1_service').val(),
							mod_ld_quiz_tutorat1_intitule: $('#mod_ld_quiz_tutorat1_intitule').val(),
                            mod_ld_quiz_tutorat1_datedeb: $('#mod_ld_quiz_tutorat1_datedeb').val(),
                            mod_ld_quiz_tutorat1_datefin: $('#mod_ld_quiz_tutorat1_datefin').val(),
                            mod_ld_quiz_tutorat1_lieu: $('#mod_ld_quiz_tutorat1_lieu').val(),
                            mod_ld_quiz_tutorat1_tuteur: $('#mod_ld_quiz_tutorat1_tuteur').val(),
                            mod_ld_quiz_tutorat1_service: $('#mod_ld_quiz_tutorat1_service').val(),
							mod_ld_quiz_e_learning1_intitule: $('#mod_ld_quiz_e_learning1_intitule').val(),
                            mod_ld_quiz_e_learning1_datedeb: $('#mod_ld_quiz_e_learning1_datedeb').val(),
                            mod_ld_quiz_e_learning1_datefin: $('#mod_ld_quiz_e_learning1_datefin').val(),
                            mod_ld_quiz_e_learning1_lieu: $('#mod_ld_quiz_e_learning1_lieu').val(),
                            mod_ld_quiz_e_learning1_tuteur: $('#mod_ld_quiz_e_learning1_tuteur').val(),
                            mod_ld_quiz_e_learning1_service: $('#mod_ld_quiz_e_learning1_service').val()
							
                            
                        }
                        $.ajax({
                            url: mod_ld.ajax_url,
                            type: 'POST',
                            dataType: 'JSON',
                            data: {
                                action: "add_certificate",
                                dataset: dataset,
                            },
                            success:function(resp){
                                console.log(resp)
                                if( resp.status && resp.status == 'success' ) {
                                    Swal.fire({
                                        title: 'Success',
                                        text: 'Certificate added successfully',
                                        icon: 'success'
                                    })
                                }
                                window.location.reload()
                            },
                            error:function(err){
                                console.log(err)
                            }
                        })
                    }
                }
                swal_obj.showCancelButton = true
                if( is_disabled && !mod_ld.is_admin ) {
                    swal_obj.showConfirmButton = false
                }
                Swal.fire(swal_obj).then(function(resp){
                    console.log('resp after result',resp)
                })
            },
            error:function(err){
                console.log(err)
                this_el.html(this_text)
            }
        })
    })
    $('.mod-ld-extn-cont-qc, .mod-ld-extn-cont-c').on('change',function(){
        let cat_id = $(this).val()
        if( !cat_id ) {
            $(this).closest('.mod_ld_category').find('.ld-quiz-progress-content-container p').show()
            return
        }
        let titles = $('.mod-ld-extn-cont-qc').val()
        console.log('titles',titles)
        let cat_titles = $('.mod-ld-extn-cont-c').val()
        console.log('cat titles',cat_titles)
        let els = $(this).closest('.mod_ld_category').find('.ld-quiz-progress-content-container p')
        $.each(els,function(key,value){
            let html = $(value).find('strong a').html()
            if( titles.indexOf(html) > -1 && cat_titles.indexOf(html) > -1 ) {
                jQuery(value).show()
            } else {
                jQuery(value).hide()
            }
        })        
        // console.log(cat_id)
        // console.log(titles)
    })
    $.each($('.mod_ld_category'),function(k,v){
        let titles = $(v).attr('data-title')
        let els = $(v).find('.ld-quiz-progress-content-container p')
        $.each(els,function(key,value){
            let html = $(value).find('strong a').html()
            console.log(html)
            if( titles.indexOf(html) > -1 ) {
                jQuery(value).show()
                // jQuery(value).css('background','gray')
            } else {
                // jQuery(value).css('background','red')
                jQuery(value).hide()
            }
        })     
    })

    // $('#mod-ld-extn-cont-c').on('change',function(){
    //     let cat_id = $(this).val()
    //     let titles = $(this).children('option:selected').attr('data-post-ids')
    //     let els = $('.ld-quiz-progress-content-container p')
    //     jQuery.each(els,function(key,value){
    //         let html = jQuery(value).find('strong a').html()
    //         if( titles.indexOf(html) > -1 ) {
    //             // console.log(html)
    //             jQuery(value).show()
    //         } else {
    //             jQuery(value).hide()
    //         }
    //     })        
    //     console.log(cat_id)
    //     console.log(titles)
    // })
})

    $(document).ready(function() {
        $('.toggle-link').on('click', function(e) {
            e.preventDefault();
            var $masquerDiv = $(this).next('.masquer');
            $masquerDiv.toggle();

            if ($masquerDiv.is(':visible')) {
                $(this).text('[-]');
            } else {
                $(this).text('[+]');
            }
        });
    });
