<?php if(have_posts() ): while(have_posts() ): the_post(); ?>
<p><?php echo get_the_date(); ?></p>
<?php 
$categories = get_the_category();
foreach($categories as $cat):?>
<a href="<?php echo get_category_link($cat->term_id); ?>" class="btn btn-danger"><?php echo $cat->name;?></a>

<?php endforeach;?>

this is a single post
<?php the_title(); ?>
<?php the_content(); ?>
<?php the_author(); ?>
<?php
$fname = get_the_author_meta('first_name' );
$lname = get_the_author_meta('last_name' );
echo $fname . ' ' . $lname;
?>
<p>Posted by: <?php echo $fname; ?> <?php echo $lname; ?></p>



<?php endwhile; else: endif; ?>