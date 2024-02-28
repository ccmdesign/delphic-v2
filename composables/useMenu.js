export default function () {
  const menuData = ref([
    {
      label: 'Projects',
      url: '#projects'
    },
    {
      label: 'About us',
      url: '#about-us'
    },
    {
      label: 'Contact',
      url: '#contact'
    },
  ])

  const socialLinks = ref([
    {
      name: 'Youtube'
    },
    {
      name: 'Linkedin'
    },
    {
      name: 'Facebook'
    },
    {
      name: 'Instagram'
    },
    {
      name: 'Twitter'
    },
  ])

  return { menu: menuData, socialLinks }
}