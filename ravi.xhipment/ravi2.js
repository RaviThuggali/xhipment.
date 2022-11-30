__('Users will be able to edit their own posts.', 'xoousers'),
__('Users will be able to edit their own posts.', 'xoousers')
);


$this->create_plugin_setting(
'select',
'enable_post_del',
__('User can delete post?', 'xoousers'),
array(
    'yes' => __('YES', 'xoousers'),
    'no' => __('NO', 'xoousers'),
    
),
__('Users will be able to delete their own posts.', 'xoousers'),
__('Users will be able to delete their own posts.', 'xoousers')
);

$this->create_plugin_setting(
'select',
'uultra_front_publisher_default_status',
__('Default Status','xoousers'),
array(
'pending' => __('Pending','xoousers'), 
'publish' => __('Publish','xoousers'),
),