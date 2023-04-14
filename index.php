<?php
/**
 * 
 * Plugin Name: Modified learnDash extension
 * Author: Md. Sarwar-A-Kawsar
 * 
 */

if( !defined('ABSPATH') ) exit;
add_action('wp_enqueue_scripts','ld_wp_enqueue_scripts_callback');
add_action('admin_enqueue_scripts','ld_wp_enqueue_scripts_callback');
function ld_wp_enqueue_scripts_callback(){
    wp_enqueue_script('jquery');
    wp_enqueue_script('ld_wp_callback_script',plugin_dir_url( __FILE__ ).'/script.js',array(),mt_rand(1,999));
    $localize = array(
        'ajax_url' => admin_url('admin-ajax.php')
    );
    if( is_admin() ) {
        $localize['is_admin'] = true;
    }
    wp_localize_script('ld_wp_callback_script','mod_ld',$localize);
    // include swal2 from cdn
    wp_enqueue_script('ld_wp_swal2', 'https://cdn.jsdelivr.net/npm/sweetalert2@11', array(), mt_rand(1,999));
    // include fontawesome from cdn
    wp_enqueue_style('ld_wp_style', plugin_dir_url(__FILE__).'/style.css', array(), mt_rand(1,999));
}
add_action('wp_ajax_add_certificate','add_certificate_callback');
function add_certificate_callback(){
    if( isset($_POST['dataset']) ) {
        $dataset = array(
			'mod_ld_quiz_tutorat',
			'mod_ld_quiz_form_int',
			'mod_ld_quiz_form_ext',
			'mod_ld_quiz_e_learning',
			'mod_ld_quiz_autres',
			'mod_ld_quiz_responsable',
			'mod_ld_quiz_observation',
			'mod_ld_quiz_formint_intitule', 
			'mod_ld_quiz_formint_datedeb',
			'mod_ld_quiz_formint_datefin', 
			'mod_ld_quiz_formint_lieu',
			'mod_ld_quiz_formint_tuteur', 
			'mod_ld_quiz_formint_service',
			'mod_ld_quiz_formext_intitule', 
			'mod_ld_quiz_formext_datedeb',
			'mod_ld_quiz_formext_datefin', 
			'mod_ld_quiz_formext_lieu',
			'mod_ld_quiz_formext_tuteur', 
			'mod_ld_quiz_formext_service',
			'mod_ld_quiz_tutorat_intitule', 
			'mod_ld_quiz_tutorat_datedeb',
			'mod_ld_quiz_tutorat_datefin', 
			'mod_ld_quiz_tutorat_lieu',
			'mod_ld_quiz_tutorat_tuteur', 
			'mod_ld_quiz_tutorat_service',
			'mod_ld_quiz_e_learning_intitule', 
			'mod_ld_quiz_e_learning_datedeb',
			'mod_ld_quiz_e_learning_datefin', 
			'mod_ld_quiz_e_learning_lieu',
			'mod_ld_quiz_e_learning_tuteur', 
			'mod_ld_quiz_e_learning_service',
			'mod_ld_quiz_formint1_intitule', 
			'mod_ld_quiz_formint1_datedeb',
			'mod_ld_quiz_formint1_datefin', 
			'mod_ld_quiz_formint1_lieu',
			'mod_ld_quiz_formint1_tuteur', 
			'mod_ld_quiz_formint1_service',
			'mod_ld_quiz_formext1_intitule', 
			'mod_ld_quiz_formext1_datedeb',
			'mod_ld_quiz_formext1_datefin', 
			'mod_ld_quiz_formext1_lieu',
			'mod_ld_quiz_formext1_tuteur', 
			'mod_ld_quiz_formext1_service',
			'mod_ld_quiz_tutorat1_intitule', 
			'mod_ld_quiz_tutorat1_datedeb',
			'mod_ld_quiz_tutorat1_datefin', 
			'mod_ld_quiz_tutorat1_lieu',
			'mod_ld_quiz_tutorat1_tuteur', 
			'mod_ld_quiz_tutorat1_service',
			'mod_ld_quiz_e_learning1_intitule', 
			'mod_ld_quiz_e_learning1_datedeb',
			'mod_ld_quiz_e_learning1_datefin', 
			'mod_ld_quiz_e_learning1_lieu',
			'mod_ld_quiz_e_learning1_tuteur', 
			'mod_ld_quiz_e_learning1_service'
        );
        $output = [];
        foreach($dataset as $a_data) {
            if( isset($_POST['dataset'][$a_data]) ) {
                learndash_update_user_activity_meta($_POST['dataset']['ref_id'],$a_data,$_POST['dataset'][$a_data]);
            }
        }
        learndash_update_user_activity_meta($_POST['dataset']['ref_id'],'mod_ld_quiz_is_submitted',1);
        echo json_encode(array(
            'status' => 'success'
        ));
        exit;
    }
}
add_action('wp_ajax_get_the_quiz_data','get_the_quiz_data_callback');
add_action('wp_ajax_nopriv_get_the_quiz_data','get_the_quiz_data_callback');
function get_the_quiz_data_callback(){
    if( isset($_POST['dataset']) ) {
        $ref_id = $_POST['dataset'];
        $output = array(
            'ref_id' => $_POST['dataset'],
            'quiz' => get_the_title(learndash_get_user_activity_meta($ref_id,'quiz',true)),
            'quiz_id' => learndash_get_user_activity_meta($ref_id,'quiz',true),
            'time' => date('Y-m-d H:i:s',learndash_get_user_activity_meta($ref_id,'time',true)),
            'score' => learndash_get_user_activity_meta($ref_id,'score',true),
            'count' => learndash_get_user_activity_meta($ref_id,'count',true)
        );
        $dataset = array(
			'mod_ld_quiz_tutorat',
			'mod_ld_quiz_form_int',
			'mod_ld_quiz_form_ext',
			'mod_ld_quiz_e_learning',
			'mod_ld_quiz_autres',
			'mod_ld_quiz_responsable',
			'mod_ld_quiz_observation',
			'mod_ld_quiz_formint_intitule', 
			'mod_ld_quiz_formint_datedeb',
			'mod_ld_quiz_formint_datefin', 
			'mod_ld_quiz_formint_lieu',
			'mod_ld_quiz_formint_tuteur', 
			'mod_ld_quiz_formint_service',
			'mod_ld_quiz_formext_intitule', 
			'mod_ld_quiz_formext_datedeb',
			'mod_ld_quiz_formext_datefin', 
			'mod_ld_quiz_formext_lieu',
			'mod_ld_quiz_formext_tuteur', 
			'mod_ld_quiz_formext_service',
			'mod_ld_quiz_tutorat_intitule', 
			'mod_ld_quiz_tutorat_datedeb',
			'mod_ld_quiz_tutorat_datefin', 
			'mod_ld_quiz_tutorat_lieu',
			'mod_ld_quiz_tutorat_tuteur', 
			'mod_ld_quiz_tutorat_service',
			'mod_ld_quiz_e_learning_intitule', 
			'mod_ld_quiz_e_learning_datedeb',
			'mod_ld_quiz_e_learning_datefin', 
			'mod_ld_quiz_e_learning_lieu',
			'mod_ld_quiz_e_learning_tuteur', 
			'mod_ld_quiz_e_learning_service',
			'mod_ld_quiz_formint1_intitule', 
			'mod_ld_quiz_formint1_datedeb',
			'mod_ld_quiz_formint1_datefin', 
			'mod_ld_quiz_formint1_lieu',
			'mod_ld_quiz_formint1_tuteur', 
			'mod_ld_quiz_formint1_service',
			'mod_ld_quiz_formext1_intitule', 
			'mod_ld_quiz_formext1_datedeb',
			'mod_ld_quiz_formext1_datefin', 
			'mod_ld_quiz_formext1_lieu',
			'mod_ld_quiz_formext1_tuteur', 
			'mod_ld_quiz_formext1_service',
			'mod_ld_quiz_tutorat1_intitule', 
			'mod_ld_quiz_tutorat1_datedeb',
			'mod_ld_quiz_tutorat1_datefin', 
			'mod_ld_quiz_tutorat1_lieu',
			'mod_ld_quiz_tutorat1_tuteur', 
			'mod_ld_quiz_tutorat1_service',
			'mod_ld_quiz_e_learning1_intitule', 
			'mod_ld_quiz_e_learning1_datedeb',
			'mod_ld_quiz_e_learning1_datefin', 
			'mod_ld_quiz_e_learning1_lieu',
			'mod_ld_quiz_e_learning1_tuteur', 
			'mod_ld_quiz_e_learning1_service',
			'mod_ld_quiz_is_submitted'
        );
        foreach($dataset as $a_data) {
            $meta_data = learndash_get_user_activity_meta($ref_id,$a_data,true);
            if( $meta_data ) {
                $output[$a_data] = $meta_data;
            }
        }
        echo json_encode($output);
        exit;
    }
}
add_action('wp_ajax_get_the_all_quiz_data','get_the_all_quiz_data_callback');
add_action('wp_ajax_nopriv_get_the_all_quiz_data','get_the_all_quiz_data_callback');
function get_the_all_quiz_data_callback(){
    if( isset($_POST['dataset']) ) {
        $ref_ids = $_POST['dataset'];
        $dataset_output = [];
        foreach($ref_ids as $ref_id){
            $output = array(
                'ref_id' => $ref_id,
                'quiz' => get_the_title(learndash_get_user_activity_meta($ref_id,'quiz',true)),
                'quiz_id' => learndash_get_user_activity_meta($ref_id,'quiz',true),
                'time' => date('Y-m-d H:i:s',learndash_get_user_activity_meta($ref_id,'time',true)),
                'score' => learndash_get_user_activity_meta($ref_id,'score',true),
                'count' => learndash_get_user_activity_meta($ref_id,'count',true)
            );
            $dataset = array(
				'mod_ld_quiz_tutorat',
				'mod_ld_quiz_form_int',
				'mod_ld_quiz_form_ext',
				'mod_ld_quiz_e_learning',
				'mod_ld_quiz_autres',
				'mod_ld_quiz_responsable',
				'mod_ld_quiz_observation',
				'mod_ld_quiz_formint_intitule', 
				'mod_ld_quiz_formint_datedeb',
				'mod_ld_quiz_formint_datefin', 
				'mod_ld_quiz_formint_lieu',
				'mod_ld_quiz_formint_tuteur', 
				'mod_ld_quiz_formint_service',
				'mod_ld_quiz_formext_intitule', 
				'mod_ld_quiz_formext_datedeb',
				'mod_ld_quiz_formext_datefin', 
				'mod_ld_quiz_formext_lieu',
				'mod_ld_quiz_formext_tuteur', 
				'mod_ld_quiz_formext_service',
				'mod_ld_quiz_tutorat_intitule', 
				'mod_ld_quiz_tutorat_datedeb',
				'mod_ld_quiz_tutorat_datefin', 
				'mod_ld_quiz_tutorat_lieu',
				'mod_ld_quiz_tutorat_tuteur', 
				'mod_ld_quiz_tutorat_service',
				'mod_ld_quiz_e_learning_intitule', 
				'mod_ld_quiz_e_learning_datedeb',
				'mod_ld_quiz_e_learning_datefin', 
				'mod_ld_quiz_e_learning_lieu',
				'mod_ld_quiz_e_learning_tuteur', 
				'mod_ld_quiz_e_learning_service',
				'mod_ld_quiz_formint1_intitule', 
			'mod_ld_quiz_formint1_datedeb',
			'mod_ld_quiz_formint1_datefin', 
			'mod_ld_quiz_formint1_lieu',
			'mod_ld_quiz_formint1_tuteur', 
			'mod_ld_quiz_formint1_service',
			'mod_ld_quiz_formext1_intitule', 
			'mod_ld_quiz_formext1_datedeb',
			'mod_ld_quiz_formext1_datefin', 
			'mod_ld_quiz_formext1_lieu',
			'mod_ld_quiz_formext1_tuteur', 
			'mod_ld_quiz_formext1_service',
			'mod_ld_quiz_tutorat1_intitule', 
			'mod_ld_quiz_tutorat1_datedeb',
			'mod_ld_quiz_tutorat1_datefin', 
			'mod_ld_quiz_tutorat1_lieu',
			'mod_ld_quiz_tutorat1_tuteur', 
			'mod_ld_quiz_tutorat1_service',
			'mod_ld_quiz_e_learning1_intitule', 
			'mod_ld_quiz_e_learning1_datedeb',
			'mod_ld_quiz_e_learning1_datefin', 
			'mod_ld_quiz_e_learning1_lieu',
			'mod_ld_quiz_e_learning1_tuteur', 
			'mod_ld_quiz_e_learning1_service',
				'mod_ld_quiz_is_submitted'
            );
            foreach($dataset as $a_data) {
                $meta_data = learndash_get_user_activity_meta($ref_id,$a_data,true);
                if( $meta_data ) {
                    $output[$a_data] = $meta_data;
                }
            }
            $dataset_output[] = $output;
        }
        echo json_encode($dataset_output);
        exit;
    }
}
add_shortcode( 'ld_course_info_mod', 'ld_course_info_mod_callback' );
function ld_course_info_mod_callback( $atts ){
    ob_start();
    $atts = shortcode_atts( array(
        'cat_id' => '',
        'quiz_num' => 9999999
    ), $atts );
    $qc_terms = get_terms( array(
        'taxonomy' => 'ld_quiz_category',
        'hide_empty' => true
    ) );
    $qc_terms = get_terms( array(
        'taxonomy' => 'ld_quiz_category',
        'hide_empty' => true
    ) );
    ?>
    <div class="mod_ld_category" data-title="<?php echo mod_ld_get_post_titles($atts['cat_id']); ?>"/>
        <div class="mod-ld-extn-cont" style="display:flex;flex-direction:column;gap:8px;">
            <?php if( !is_wp_error( $qc_terms ) && !empty($qc_terms) ) { ?>
                <label>Quiz Category</label>
                <select class="mod-ld-extn-cont-qc" data-type="quiz-category">
                    <option value="">Select a quiz category</option>
                    <?php foreach($qc_terms as $qc_term){ 
                        $qterm_id = $qc_term->term_id;
                        // $qargs = [
                        //     'post_type' => 'sfwd-quiz',
                        //     'tax_query' => [
                        //         [
                        //             'taxonomy' => 'ld_quiz_category',
                        //             'terms' => $qterm_id,
                        //             'include_children' => false
                        //         ],
                        //     ],
                        // ];
                        // $qposts = get_posts( $qargs );
                        // $qpost_ids = [];
                        // foreach( $qposts as $qa_post ) {
                        //     $qpost_ids[] = $qa_post->post_title;
                        // }
                        ?>
                        <option value="<?php echo mod_ld_get_post_titles($qterm_id); ?>" data-post-ids="<?php echo mod_ld_get_post_titles($qterm_id); ?>" value2="<?php echo $qc_term->term_id; ?>"><?php echo $qc_term->name; ?></option>
                        <!-- <option data-post-ids="<?php //echo implode(',',$qpost_ids); ?>" value="<?php echo $qc_term->term_id; ?>"><?php echo $qc_term->name; ?></option> -->
                    <?php } ?>
                </select>
            <?php } ?>
            <?php
        $cat_terms = get_terms( array(
            'taxonomy' => 'category',
            'hide_empty' => true
        ) );
        ?>
        <?php if( !is_wp_error( $cat_terms ) && !empty($cat_terms) ) { ?>
            <label>Category</label>
            <select class="mod-ld-extn-cont-c" data-type="category">
                <option value="">Select a category</option>
                <?php foreach($cat_terms as $cat_term){
                        $term_id = $cat_term->term_id;
                        $args = [
                            'post_type' => 'sfwd-quiz',
                            'tax_query' => [
                                [
                                    'taxonomy' => 'category',
                                    'terms' => $atts['cat_id'],
                                    'include_children' => false
                                ],
                            ],
                        ];
                        $posts = get_posts( $args );
                        $post_ids = [];
                        foreach( $posts as $a_post ) {
                            $post_ids[] = $a_post->post_title;
                        }
                ?>
                    <option value="<?php echo mod_ld_get_post_titles($term_id); ?>" data-post-ids="<?php echo mod_ld_get_post_titles($term_id); ?>" value2="<?php echo $cat_term->term_id; ?>"><?php echo $cat_term->name; ?></option>
                <?php } ?>
            </select>
        <?php } ?>
        </div>
        
        <?php echo do_shortcode( '[ld_course_info quiz quiz_num="9999999"]' ); ?>
    </div>
    <?php
    return ob_get_clean();
}
function mod_ld_get_post_titles( $cat_id ){
    $post_ids = [];
    global $wpdb;
    $results = $wpdb->get_results("SELECT * FROM {$wpdb->term_relationships} WHERE term_taxonomy_id='$cat_id'",ARRAY_A);
    if( empty($results) ) return false;
    foreach( $results as $result ) {
        $post_id = $result['object_id'];
        $a_post = get_post($post_id);
        $post_ids[] = $a_post->post_title;
    }
    if( !empty($post_ids) ) {
        return implode(',',$post_ids);
    } else {
        return false;
    }
}
