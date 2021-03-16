const express = require('express');
const router = express.Router();
const isBase64 = require('is-base64');
const base64Img = require('base64-img');

const {
  Media
} = require('../models');
const fs = require('fs');

const {
  HOSTNAME
} = process.env;

// getall
router.get('/', async (req, res) => {
  const media = await Media.findAll({
    attributes: ['id', 'image']
  });

  const mappedMedia = media.map((m) => {
    m.image = `${HOSTNAME}/${m.image}`;
    return m;
  })

  return res.json({
    status: 'success',
    data: mappedMedia
  })
})

// post
router.post('/', (req, res) => {
  const image = req.body.image;

  if (!isBase64(image, {
      mimeRequired: true
    })) {
    return res.status(400).json({
      status: 'error',
      message: 'invalid base64'
    })
  } else {
    base64Img.img(image, './public/images', Date.now(), async (err, filepath) => {
      if (err) {
        return res.status(400).json({
          status: 'error',
          message: err.message
        });
      } else {
        const filename = filepath.split('\\').pop().split('/').pop();
        //  return res.send(Media);
        const media = await Media.create({
          image: `images/${filename}`
        });
        return res.json({
          status: 'success',
          data: {
            id: media.id,
            image: `${HOSTNAME}/images/${filename}`,
            updated_at: media.updatedAt
          }
        })
      }
    })
  }
})

// delete 1
router.delete('/:id', async (req, res) => {
  const id = req.params.id

  const media = await Media.findByPk(id);

  if (!media) {
    return res.status(404).json({
      status: 'error',
      message: 'media not found'
    })
  }

  fs.unlink(`./public/${media.image}`, async (err) => {
    if (err) {
      return res.status(400).json({
        status: 'error',
        message: err.message
      })
    }

    await media.destroy();

    return res.json({
      status: 'success',
      messaga: 'image delete'
    })

  })


});

// delete 2
router.post('/deleted', async (req, res) => {
  var _image = req.body.image.split('\\').pop().split('/').pop()
  var __image = `images/${_image}`

  const media = await Media.findAll({ where: { image: __image } });
  if (media.length < 1 ) {
    return res.status(404).json({
      status: 'error',
      message: 'media not found'
    })
  }
  
  fs.unlink(`./public/${media[0].image}`, async (err) => {
    if (err) {
      return res.status(400).json({
        status: 'error',
        message: err.message
      })
    }

    const mediaById = await Media.findByPk(media[0].id);
    
    await mediaById.destroy();

    return res.json({
      status: 'success',
      messaga: 'image delete'
    })

  })

});


module.exports = router;