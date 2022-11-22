import { PasteImage } from './PasteImage'

// 테스팅 코드
describe('PasteImage', () => {
  const setMedias = (medias: string[]) => {
    return medias
  }
  it('Best case', () => {
    expect(
      PasteImage({
        content: `<h2 style="text-align: justify;">What is DNA?- What DNA stands for and DNA meaning</h2>
<p style="text-align: center;"><img src="https://chblob.icloudhospital.com/imagecontainer/1-e4a2a1c9-59c7-46b5-b1e3-df39e7d3f8f6.jpg" alt="DNA" width="880" height="495" /></p>
<p style="text-align: justify;"><span style="font-weight: 400;">If you ever wondered what DNA stands for - this is it: deoxyribonucleic acid.Humans and nearly all other species are carrying their genetic information in their DNA.&nbsp;</span></p>
<p style="text-align: justify;"><span style="font-weight: 400;">The most common DNA definition is an organic chemical with a complex molecular structure, playing an important part in the transmission of inherited traits in all prokaryotic and eukaryotic cells and multiple viruses.</span></p>
<p style="text-align: justify;">&nbsp;</p>
<h3 style="text-align: justify;">Is DNA a molecule?</h3>
<p style="text-align: justify;"><span style="font-weight: 400;">In other words, DNA is scientifically considered a molecule that holds the biological instructions that give each species its individuality.</span></p>
<p style="text-align: justify;">&nbsp;</p>
<h2 style="text-align: justify;">Where is DNA located?</h2>
<p style="text-align: center;"><img src="https://chblob.icloudhospital.com/imagecontainer/2-bd0e2d77-a237-4808-a880-ab05faf7dad7.jpg" alt="Where is DNA located?" width="753" height="495" /></p>`,
        setMedias: setMedias
      })
    ).toStrictEqual([
      'https://chblob.icloudhospital.com/imagecontainer/1-e4a2a1c9-59c7-46b5-b1e3-df39e7d3f8f6.jpg',
      'https://chblob.icloudhospital.com/imagecontainer/2-bd0e2d77-a237-4808-a880-ab05faf7dad7.jpg'
    ])
  })
  it('No image case', () => {
    expect(
      PasteImage({
        content: `<h2 style="text-align: justify;">What is DNA?- What DNA stands for and DNA meaning</h2>
<p style="text-align: center;"></p>
<p style="text-align: justify;"><span style="font-weight: 400;">If you ever wondered what DNA stands for - this is it: deoxyribonucleic acid.Humans and nearly all other species are carrying their genetic information in their DNA.&nbsp;</span></p>
<p style="text-align: justify;"><span style="font-weight: 400;">The most common DNA definition is an organic chemical with a complex molecular structure, playing an important part in the transmission of inherited traits in all prokaryotic and eukaryotic cells and multiple viruses.</span></p>
<p style="text-align: justify;">&nbsp;</p>
<h3 style="text-align: justify;">Is DNA a molecule?</h3>
<p style="text-align: justify;"><span style="font-weight: 400;">In other words, DNA is scientifically considered a molecule that holds the biological instructions that give each species its individuality.</span></p>
<p style="text-align: justify;">&nbsp;</p>
<h2 style="text-align: justify;">Where is DNA located?</h2>
<p style="text-align: center;"></p>`,
        setMedias: setMedias
      })
    ).toStrictEqual([])
  })
})
