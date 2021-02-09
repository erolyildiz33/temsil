<?php $settings = get_settings(); ?>
<meta charset="utf-8">
<title><?php echo $settings->company_name . " | " . $settings->slogan; ?></title>
<meta name="description" content="">


<!-- Mobile Meta -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">


<?php if(isset($opengraph)){ ?>

<!--    OPENGRAPH-->
    <meta property="og:title" content="<?php echo $news->title; ?>" />
    <meta property="og:description" content="<?php echo character_limiter(strip_tags($news->description), 200); ?>" />
    <?php if($news->news_type == "image") { ?>
        <meta property="og:image" content="<?php echo base_url("uploads/news_v/513x289/$news->img_url"); ?>" />
    <?php } else { ?>
        <meta property="og:video" content="<?php echo "https://www.youtube.com/v/$news->video_url"; ?>" />
    <?php } ?>

<?php } ?>

<?php $this->load->view("frontend/includes/include_style"); ?>