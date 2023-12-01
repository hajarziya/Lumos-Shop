import { AppLayout, Footer } from '@src/components/shop'
import { DiscountBanner } from './sections/discount-banner/DiscountBanner'
import { TopBanners } from './sections/top-banner/TopBanners'
import { PromotionSection } from './sections/PromotionSection'
import { DepartmentsSection } from './sections/DepartmentsSection'

export function HomePage () {
  return <AppLayout>
		<TopBanners/>
		<DepartmentsSection/>
		<DiscountBanner/>
		<PromotionSection title="Deck It All for Less" products={[1, 2, 3, 4]}/>
		<Footer/>
	</AppLayout>
}
