
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { UserProfile } from '@/pages/AIFashion';
import { getProductRecommendations, Product } from '@/data/products';
import { Star, Heart, ShoppingCart, Info } from 'lucide-react';
import { useState } from 'react';

interface ProductRecommendationsProps {
  userProfile: UserProfile;
}

const ProductRecommendations = ({ userProfile }: ProductRecommendationsProps) => {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  
  const recommendations = getProductRecommendations(userProfile);

  const toggleFavorite = (productId: string) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const getStyleExplanation = (product: Product) => {
    let explanation = "";
    
    if (userProfile.bodyShape === 'pear' && product.bodyShapes.includes('pear')) {
      explanation += "Perfect for pear shapes - creates balance and flatters your silhouette. ";
    }
    if (userProfile.bodyShape === 'apple' && product.bodyShapes.includes('apple')) {
      explanation += "Ideal for apple shapes - emphasizes your best features while providing comfort. ";
    }
    if (userProfile.height < 160 && product.heightRecommendations.includes('petite')) {
      explanation += "Specially recommended for petite frames - creates elegant proportions. ";
    }
    if (userProfile.skinTone && product.skinTones.includes(userProfile.skinTone)) {
      explanation += `Colors complement your ${userProfile.skinTone} undertones beautifully.`;
    }
    
    return explanation || "Carefully selected based on your personal style preferences.";
  };

  if (recommendations.length === 0) {
    return (
      <Card className="bg-[#252631] border-[#2a2d3a]">
        <CardContent className="text-center py-12">
          <h3 className="text-xl font-semibold text-white mb-4">Complete Your Profile</h3>
          <p className="text-gray-300 mb-6">
            Add more details to get personalized product recommendations
          </p>
          <Button className="bg-[#ffa726] hover:bg-[#ff9800] text-black">
            Update Preferences
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="kerala-serif text-3xl font-bold text-white">
          Recommended for You
        </h2>
        <Badge className="bg-[#ffa726]/20 text-[#ffa726] border-[#ffa726]/30">
          {recommendations.length} Products
        </Badge>
      </div>

      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {recommendations.map((product) => (
          <Card key={product.id} className="bg-[#252631] border-[#2a2d3a] hover:border-[#ffa726]/50 transition-all group">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-white text-lg mb-1 group-hover:text-[#ffa726] transition-colors">
                    {product.name}
                  </CardTitle>
                  <p className="text-gray-400 text-sm mb-2">{product.subcategory}</p>
                  <Badge 
                    className={`text-xs ${
                      product.category === 'traditional' ? 'bg-amber-500/20 text-amber-400 border-amber-500/30' :
                      product.category === 'fusion' ? 'bg-purple-500/20 text-purple-400 border-purple-500/30' :
                      product.category === 'modern' ? 'bg-blue-500/20 text-blue-400 border-blue-500/30' :
                      'bg-pink-500/20 text-pink-400 border-pink-500/30'
                    }`}
                  >
                    {product.category}
                  </Badge>
                </div>
                <div className="flex flex-col items-end space-y-2">
                  <span className="text-4xl">{product.images[0]}</span>
                  <button
                    onClick={() => toggleFavorite(product.id)}
                    className={`p-1 rounded-full transition-colors ${
                      favorites.includes(product.id) 
                        ? 'text-red-400 hover:text-red-300' 
                        : 'text-gray-400 hover:text-red-400'
                    }`}
                  >
                    <Heart className="w-4 h-4" fill={favorites.includes(product.id) ? 'currentColor' : 'none'} />
                  </button>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <p className="text-gray-300 text-sm">{product.description}</p>
              
              {/* Colors */}
              <div className="flex flex-wrap gap-1">
                {product.colors.slice(0, 3).map((color) => (
                  <Badge key={color} variant="outline" className="text-xs text-gray-300 border-gray-500">
                    {color}
                  </Badge>
                ))}
                {product.colors.length > 3 && (
                  <Badge variant="outline" className="text-xs text-gray-400 border-gray-600">
                    +{product.colors.length - 3} more
                  </Badge>
                )}
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} 
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-300">{product.rating}</span>
                <span className="text-xs text-gray-500">({product.reviews} reviews)</span>
              </div>

              {/* Why Recommended */}
              <div className="bg-[#2a2d3a] p-3 rounded-lg">
                <h4 className="text-[#ffa726] text-sm font-semibold mb-1">Why we recommend this:</h4>
                <p className="text-xs text-gray-300 leading-relaxed">{getStyleExplanation(product)}</p>
              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-1">
                {product.features.slice(0, 2).map((feature) => (
                  <span key={feature} className="text-xs bg-[#2a2d3a] text-gray-300 px-2 py-1 rounded">
                    {feature}
                  </span>
                ))}
              </div>

              {/* Price and Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-[#2a2d3a]">
                <div>
                  <span className="font-semibold text-white">{product.price}</span>
                  {product.inStock ? (
                    <Badge className="ml-2 bg-green-500/20 text-green-400 border-green-500/30 text-xs">
                      In Stock
                    </Badge>
                  ) : (
                    <Badge className="ml-2 bg-red-500/20 text-red-400 border-red-500/30 text-xs">
                      Out of Stock
                    </Badge>
                  )}
                </div>
                <div className="flex space-x-2">
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="border-[#ffa726] text-[#ffa726] hover:bg-[#ffa726] hover:text-black"
                    onClick={() => setSelectedProduct(product)}
                  >
                    <Info className="w-3 h-3 mr-1" />
                    Details
                  </Button>
                  <Button 
                    size="sm" 
                    className="bg-[#ffa726] hover:bg-[#ff9800] text-black"
                    disabled={!product.inStock}
                  >
                    <ShoppingCart className="w-3 h-3 mr-1" />
                    Shop
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Product Detail Modal would go here */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <Card className="bg-[#252631] border-[#2a2d3a] max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-white text-xl">{selectedProduct.name}</CardTitle>
                  <p className="text-gray-300 mt-1">{selectedProduct.description}</p>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setSelectedProduct(null)}
                  className="text-gray-400 hover:text-white"
                >
                  ✕
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <h4 className="text-[#ffa726] font-semibold mb-2">Styling Tips:</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    {selectedProduct.stylingTips.map((tip, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <span className="text-[#ffa726] mt-1">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-[#ffa726] font-semibold mb-2">Available Colors:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProduct.colors.map((color) => (
                      <Badge key={color} variant="outline" className="text-gray-300 border-gray-500">
                        {color}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-[#ffa726] font-semibold mb-2">Available Sizes:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProduct.sizes.map((size) => (
                      <Badge key={size} className="bg-[#2a2d3a] text-gray-300">
                        {size}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-[#2a2d3a]">
                <span className="font-semibold text-white text-lg">{selectedProduct.price}</span>
                <Button className="bg-[#ffa726] hover:bg-[#ff9800] text-black">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default ProductRecommendations;
