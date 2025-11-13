require_relative "Parser"


module AlternativeCards

    def self.parse(nodes)

        output = {}

        level = 0
        last_card = nil

        nodes.each do |node|

            case node.type
            when :header

                level = node.options[:level]

                next unless level === 5

                output["cards"] ||= []
                last_card = {
                    "title" => Parser.parse(node),
                }

                if node.attr["data-image"]

                    last_card["image"] = node.attr["data-image"]

                end

                output["cards"] << last_card

            when :p

                case level
                when 3

                    output["desc"] ||= []
                    output["desc"] << {
                        "type" => "paragraph",
                        "text" => Parser.parse(node),
                    }

                when 5

                    if node.children.length() == 1 &&
                        node.children[0].type == :a

                        link_href = node.children[0].attr["href"]

                        modal = File.basename(
                            link_href,
                            File.extname(link_href),
                        )

                        last_card["modal"] = modal

                    else

                        last_card["text"] ||= []
                        last_card["text"] << {
                            "paragraph" => Parser.parse(node),
                        }

                    end

                end

            end

        end

        return output

    end

end
