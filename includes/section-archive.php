<?php if(have_posts() ): while(have_posts() ): the_post(); ?>

<div class="card">
    <div class="card-body">
        <?php if(has_post_thumbnail()): ?>
        this has a featured image
        <img src="<?php the_post_thumbnail_url('blog-small'); ?>" alt="<?php the_title(); ?>"
            class="img-fluid mb-3 img-thumbnail">
        <?php endif;?>
        <h3><?php the_title(); ?></h3>


        <?php the_excerpt(); ?>
        <a href="<?php the_permalink(); ?>" class="btn btn-success">more</a>

    </div>
</div>
<?php endwhile; else: endif; ?>