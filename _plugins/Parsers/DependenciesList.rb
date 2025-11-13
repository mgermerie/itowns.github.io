require_relative "Parser"


module DependenciesList

    def self.parse(nodes)

        output = {}

        nodes.each do |node|

            next unless node.type === :ul

            output["list"] ||= []

            node.children.each do |child|

                input = {
                    "name" => Parser.parse(child.children[0]),
                    "license" => Parser.parse(child.children[1]),
                }

                if child.children[2]

                    input["link"] = Parser.parse(child.children[2])

                end

                output["list"] << input

            end

        end

        return output

    end

end
