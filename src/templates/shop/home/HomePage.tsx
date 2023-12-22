import { AppLayout, Footer } from '@src/components/shop'
import { DiscountBanner } from './sections/discount-banner/DiscountBanner'
import { TopBanners } from './sections/top-banner/TopBanners'
import { PromotionSection } from './sections/PromotionSection'
import { DepartmentsSection } from './sections/DepartmentsSection'
import { useCategories } from '@src/api'

export function HomePage () {
  const { data: categories } = useCategories({ page: 1 })
  return <AppLayout>
		<TopBanners/>
		<DepartmentsSection/>
		<DiscountBanner/>
	  {categories?.data.data.categories.slice(0, 3).map(category =>
		  <PromotionSection key={category._id} title={category.name} categoryId={category._id}/>)}
		<Footer/>
	</AppLayout>
}
