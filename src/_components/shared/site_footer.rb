class Shared::SiteFooter < Bridgetown::Component
  def initialize(metadata:, resource:)
    @metadata, @resource = metadata, resource
    @site = Bridgetown::Current.site
  end
end
